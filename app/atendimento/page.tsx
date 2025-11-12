'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Navigation from '../components/Navigation';
import { ConfiguracaoSenhas, SenhaChamada, Guiche } from '../types';
import { api } from '@/lib/api';

export default function Atendimento() {
  const { isAuthenticated, usuario } = useAuth();
  const router = useRouter();
  const [guicheAtual, setGuicheAtual] = useState<Guiche | null>(null);
  const [ultimaSenhaChamada, setUltimaSenhaChamada] = useState<SenhaChamada | null>(null);
  const [senhasRecentes, setSenhasRecentes] = useState<SenhaChamada[]>([]);
  const [configuracao, setConfiguracao] = useState<ConfiguracaoSenhas>({
    senhaAtualNormal: 1,
    senhaAtualPrioritaria: 1,
    prefixoNormal: 'N',
    prefixoPrioritaria: 'P'
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
      return;
    }

    loadData();

    // Atualizar dados a cada 2 segundos para sincronização em tempo real
    const interval = setInterval(loadData, 2000);
    return () => clearInterval(interval);
  }, [isAuthenticated, router, usuario]);

  const loadData = async () => {
    try {
      const [guichesData, configData, senhasData] = await Promise.all([
        api.getGuiches(),
        api.getConfiguracao(),
        api.getSenhas()
      ]);

      const guicheUsuario = guichesData.find((g: Guiche) => g.usuarioId === usuario?.id);
      setGuicheAtual(guicheUsuario || null);
      setConfiguracao(configData);

      if (senhasData.length > 0 && guicheUsuario) {
        // Buscar a última senha chamada especificamente por este guichê
        const senhasDoGuiche = senhasData.filter(
          (s: SenhaChamada) => s.guiche === `Guichê ${guicheUsuario.numero}`
        );

        if (senhasDoGuiche.length > 0) {
          const ultimaSenha = senhasDoGuiche[0];
          // Se a última senha foi finalizada ou não compareceu, permitir nova chamada
          if (ultimaSenha.status === 'finalizada' || ultimaSenha.status === 'nao_compareceu') {
            setUltimaSenhaChamada(null);
          } else {
            setUltimaSenhaChamada(ultimaSenha);
          }
        } else {
          setUltimaSenhaChamada(null);
        }

        setSenhasRecentes(senhasData.slice(-10).reverse());
      } else if (guicheUsuario) {
        setUltimaSenhaChamada(null);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const chamarSenha = async (isPrioritaria: boolean) => {
    if (!guicheAtual) {
      alert('Você não está vinculado a nenhum guichê. Vá em Configuração para vincular.');
      return;
    }

    // Verificar se há um atendimento em andamento que não foi finalizado
    if (
      ultimaSenhaChamada &&
      (ultimaSenhaChamada.status === 'chamada' || ultimaSenhaChamada.status === 'atendendo')
    ) {
      alert('Você precisa finalizar o atendimento atual antes de chamar uma nova senha.');
      return;
    }

    try {
      const config = { ...configuracao };
      let numeroSenha: number;
      let prefixo: string;

      if (isPrioritaria) {
        numeroSenha = config.senhaAtualPrioritaria;
        prefixo = config.prefixoPrioritaria;
        config.senhaAtualPrioritaria++;
      } else {
        numeroSenha = config.senhaAtualNormal;
        prefixo = config.prefixoNormal;
        config.senhaAtualNormal++;
      }

      const senha = `${prefixo}${numeroSenha.toString().padStart(3, '0')}`;

      const novaSenha: SenhaChamada = {
        senha,
        guiche: `Guichê ${guicheAtual.numero}`,
        horario: new Date().toISOString(),
        isPrioritaria,
        status: 'chamada'
      };

      // Salvar no banco de dados
      await api.createSenha(novaSenha);
      await api.updateConfiguracao(config);

      // Atualizar estado local imediatamente
      setConfiguracao(config);
      setUltimaSenhaChamada(novaSenha);
      setSenhasRecentes([novaSenha, ...senhasRecentes.slice(0, 9)]);

      // Recarregar dados do servidor para sincronizar
      await loadData();

      // Disparar evento para atualizar display
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Erro ao chamar senha:', error);
      alert('Erro ao chamar senha. Tente novamente.');
    }
  };

  const rechamarSenha = async (senha: SenhaChamada) => {
    if (!guicheAtual) {
      alert('Você não está vinculado a nenhum guichê. Vá em Configuração para vincular.');
      return;
    }

    try {
      const senhaRechamada: SenhaChamada = {
        ...senha,
        guiche: `Guichê ${guicheAtual.numero}`,
        horario: new Date().toISOString(),
        status: 'chamada'
      };

      await api.createSenha(senhaRechamada);

      setUltimaSenhaChamada(senhaRechamada);
      setSenhasRecentes([senhaRechamada, ...senhasRecentes.slice(0, 9)]);

      // Disparar evento para atualizar display
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Erro ao rechamar senha:', error);
      alert('Erro ao rechamar senha. Tente novamente.');
    }
  };

  const iniciarAtendimento = async () => {
    if (!ultimaSenhaChamada) return;

    try {
      const horarioInicio = new Date().toISOString();
      await api.updateSenha(
        ultimaSenhaChamada.senha,
        ultimaSenhaChamada.horario,
        'atendendo',
        horarioInicio
      );

      const senhaAtualizada = { ...ultimaSenhaChamada, status: 'atendendo' as const, horarioInicio };
      setUltimaSenhaChamada(senhaAtualizada);
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Erro ao iniciar atendimento:', error);
      alert('Erro ao iniciar atendimento. Tente novamente.');
    }
  };

  const marcarNaoCompareceu = async () => {
    if (!ultimaSenhaChamada) return;

    try {
      await api.updateSenha(
        ultimaSenhaChamada.senha,
        ultimaSenhaChamada.horario,
        'nao_compareceu'
      );

      const senhaAtualizada = { ...ultimaSenhaChamada, status: 'nao_compareceu' as const };
      setUltimaSenhaChamada(senhaAtualizada);
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Erro ao marcar não compareceu:', error);
      alert('Erro ao marcar não compareceu. Tente novamente.');
    }
  };

  const finalizarAtendimento = async () => {
    if (!ultimaSenhaChamada) return;

    try {
      const horarioFim = new Date().toISOString();
      await api.updateSenha(
        ultimaSenhaChamada.senha,
        ultimaSenhaChamada.horario,
        'finalizada',
        undefined,
        horarioFim
      );

      const senhaAtualizada = { ...ultimaSenhaChamada, status: 'finalizada' as const, horarioFim };
      setUltimaSenhaChamada(senhaAtualizada);
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Erro ao finalizar atendimento:', error);
      alert('Erro ao finalizar atendimento. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Atendimento</h1>
          <p className="mt-2 text-gray-600">Chame a próxima senha para atendimento</p>
        </div>

        {!guicheAtual ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-yellow-600 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Guichê não configurado</h3>
                <p className="mt-2 text-sm text-yellow-700">
                  Você não está vinculado a nenhum guichê. Por favor, vá em Configuração para vincular seu usuário a um guichê.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Informação do Guichê */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Seu Guichê</h2>
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-blue-100 rounded-lg">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Guichê {guicheAtual.numero}</p>
                  <p className="text-gray-600">{guicheAtual.nome}</p>
                </div>
              </div>
            </div>

            {/* Aviso de Atendimento em Andamento */}
            {ultimaSenhaChamada &&
              (ultimaSenhaChamada.status === 'chamada' || ultimaSenhaChamada.status === 'atendendo') && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-amber-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <p className="text-sm text-amber-800 font-medium">
                      Finalize o atendimento atual antes de chamar uma nova senha
                    </p>
                  </div>
                </div>
              )}

            {/* Botões de Chamar Senha */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => chamarSenha(false)}
                disabled={
                  ultimaSenhaChamada &&
                  (ultimaSenhaChamada.status === 'chamada' || ultimaSenhaChamada.status === 'atendendo')
                }
                className="group bg-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 rounded-xl shadow-md p-8 border border-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:transform-none"
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-blue-100 group-hover:bg-white rounded-full mb-4 transition-colors">
                    <svg
                      className="w-12 h-12 text-blue-600 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                    Senha Normal
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-100 text-center transition-colors">
                    Próxima: {configuracao.prefixoNormal}{configuracao.senhaAtualNormal.toString().padStart(3, '0')}
                  </p>
                </div>
              </button>

              <button
                onClick={() => chamarSenha(true)}
                disabled={
                  ultimaSenhaChamada &&
                  (ultimaSenhaChamada.status === 'chamada' || ultimaSenhaChamada.status === 'atendendo')
                }
                className="group bg-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 rounded-xl shadow-md p-8 border border-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:transform-none"
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-orange-100 group-hover:bg-white rounded-full mb-4 transition-colors">
                    <svg
                      className="w-12 h-12 text-orange-600 group-hover:text-orange-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                    Senha Prioritária
                  </h3>
                  <p className="text-gray-600 group-hover:text-orange-100 text-center transition-colors">
                    Próxima: {configuracao.prefixoPrioritaria}{configuracao.senhaAtualPrioritaria.toString().padStart(3, '0')}
                  </p>
                </div>
              </button>
            </div>

            {/* Última Senha Chamada */}
            {ultimaSenhaChamada && (
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Última Senha Chamada</h2>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-4xl font-bold text-gray-900">{ultimaSenhaChamada.senha}</p>
                    <p className="text-gray-600 mt-1">{ultimaSenhaChamada.guiche}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-full ${
                        ultimaSenhaChamada.isPrioritaria
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {ultimaSenhaChamada.isPrioritaria ? 'Prioritária' : 'Normal'}
                    </span>
                    <p className="text-gray-500 text-sm mt-2">
                      {new Date(ultimaSenhaChamada.horario).toLocaleTimeString('pt-BR')}
                    </p>
                  </div>
                </div>

                {/* Status da Senha */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Status:</p>
                      <span
                        className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          ultimaSenhaChamada.status === 'atendendo'
                            ? 'bg-green-100 text-green-800'
                            : ultimaSenhaChamada.status === 'finalizada'
                            ? 'bg-blue-100 text-blue-800'
                            : ultimaSenhaChamada.status === 'nao_compareceu'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {ultimaSenhaChamada.status === 'atendendo'
                          ? 'Atendendo'
                          : ultimaSenhaChamada.status === 'finalizada'
                          ? 'Finalizada'
                          : ultimaSenhaChamada.status === 'nao_compareceu'
                          ? 'Não Compareceu'
                          : 'Chamada'}
                      </span>
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button
                      onClick={iniciarAtendimento}
                      disabled={
                        ultimaSenhaChamada.status === 'atendendo' ||
                        ultimaSenhaChamada.status === 'finalizada' ||
                        ultimaSenhaChamada.status === 'nao_compareceu'
                      }
                      className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Iniciar Atendimento</span>
                    </button>

                    <button
                      onClick={marcarNaoCompareceu}
                      disabled={
                        ultimaSenhaChamada.status === 'finalizada' ||
                        ultimaSenhaChamada.status === 'nao_compareceu'
                      }
                      className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Não Compareceu</span>
                    </button>

                    <button
                      onClick={finalizarAtendimento}
                      disabled={
                        ultimaSenhaChamada.status !== 'atendendo' &&
                        ultimaSenhaChamada.status !== 'chamada'
                      }
                      className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Finalizar Atendimento</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Rechamar Senhas Anteriores */}
            {senhasRecentes.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Rechamar Senha Anterior</h2>
                <p className="text-sm text-gray-600 mb-4">Selecione uma senha que passou e não foi atendida:</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {senhasRecentes.map((senha, index) => (
                    <button
                      key={index}
                      onClick={() => rechamarSenha(senha)}
                      className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                        senha.isPrioritaria
                          ? 'border-orange-300 bg-orange-50 hover:bg-orange-100'
                          : 'border-blue-300 bg-blue-50 hover:bg-blue-100'
                      }`}
                    >
                      <p className="text-2xl font-bold text-gray-900">{senha.senha}</p>
                      <p className="text-xs text-gray-600 mt-1">
                        {new Date(senha.horario).toLocaleTimeString('pt-BR', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                      {senha.isPrioritaria && (
                        <span className="inline-flex items-center mt-2 text-xs text-orange-700">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          Prior.
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
