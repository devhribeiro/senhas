'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Navigation from '../components/Navigation';
import { Usuario, Guiche, ConfiguracaoSenhas } from '../types';
import { api } from '@/lib/api';

export default function Configuracao() {
  const { isAuthenticated, usuario } = useAuth();
  const router = useRouter();

  // Estados para Guichês
  const [guiches, setGuiches] = useState<Guiche[]>([]);
  const [novoGuiche, setNovoGuiche] = useState({ numero: '', nome: '' });

  // Estados para Usuários
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [novoUsuario, setNovoUsuario] = useState({ username: '', password: '', guicheId: '' });

  // Estados para Configuração de Senhas
  const [configuracao, setConfiguracao] = useState<ConfiguracaoSenhas>({
    senhaAtualNormal: 1,
    senhaAtualPrioritaria: 1,
    prefixoNormal: 'N',
    prefixoPrioritaria: 'P'
  });

  const [abaSelecionada, setAbaSelecionada] = useState<'guiches' | 'usuarios' | 'senhas'>('guiches');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
      return;
    }

    // Verificar se é admin
    if (usuario?.username !== 'admin') {
      router.push('/dashboard');
      return;
    }

    loadData();
  }, [isAuthenticated, usuario, router]);

  const loadData = async () => {
    try {
      const [guichesData, usuariosData, configData] = await Promise.all([
        api.getGuiches(),
        api.getUsuarios(),
        api.getConfiguracao()
      ]);

      setGuiches(guichesData);
      setUsuarios(usuariosData);
      setConfiguracao(configData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  // Funções para Guichês
  const adicionarGuiche = async () => {
    if (!novoGuiche.numero || !novoGuiche.nome) {
      alert('Preencha todos os campos do guichê');
      return;
    }

    const guiche: Guiche = {
      id: Date.now().toString(),
      numero: novoGuiche.numero,
      nome: novoGuiche.nome
    };

    await api.createGuiche(guiche);
    await loadData();
    setNovoGuiche({ numero: '', nome: '' });
  };

  const removerGuiche = async (id: string) => {
    if (!confirm('Deseja realmente remover este guichê?')) return;
    await api.deleteGuiche(id);
    await loadData();
  };

  // Funções para Usuários
  const adicionarUsuario = async () => {
    if (!novoUsuario.username || !novoUsuario.password) {
      alert('Preencha todos os campos do usuário');
      return;
    }

    const usuario: Usuario = {
      id: Date.now().toString(),
      username: novoUsuario.username,
      password: novoUsuario.password,
      guicheId: novoUsuario.guicheId || undefined
    };

    await api.createUsuario(usuario);
    await loadData();
    setNovoUsuario({ username: '', password: '', guicheId: '' });
  };

  const removerUsuario = async (id: string) => {
    if (!confirm('Deseja realmente remover este usuário?')) return;
    await api.deleteUsuario(id);
    await loadData();
  };

  const vincularUsuarioAoGuiche = async (usuarioId: string, guicheId: string) => {
    await api.updateUsuario(usuarioId, guicheId || null);
    await loadData();
  };

  // Funções para Configuração de Senhas
  const salvarConfiguracao = async () => {
    await api.updateConfiguracao(configuracao);
    alert('Configuração salva com sucesso!');
  };

  const resetarSenhas = async () => {
    if (!confirm('Deseja realmente limpar todo o histórico de senhas?')) return;

    await api.clearSenhas();
    await api.updateConfiguracao({
      ...configuracao,
      senhaAtualNormal: 1,
      senhaAtualPrioritaria: 1
    });

    await loadData();
    alert('Histórico de senhas limpo com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Configuração</h1>
          <p className="mt-2 text-gray-600">Gerencie guichês, usuários e configurações do sistema</p>
        </div>

        {/* Abas */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setAbaSelecionada('guiches')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  abaSelecionada === 'guiches'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Guichês
              </button>
              <button
                onClick={() => setAbaSelecionada('usuarios')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  abaSelecionada === 'usuarios'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Usuários
              </button>
              <button
                onClick={() => setAbaSelecionada('senhas')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  abaSelecionada === 'senhas'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Configuração de Senhas
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Aba Guichês */}
            {abaSelecionada === 'guiches' && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Adicionar Novo Guichê</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Número do Guichê"
                      value={novoGuiche.numero}
                      onChange={(e) => setNovoGuiche({ ...novoGuiche, numero: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Nome do Guichê"
                      value={novoGuiche.nome}
                      onChange={(e) => setNovoGuiche({ ...novoGuiche, nome: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={adicionarGuiche}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Guichês Cadastrados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {guiches.map((guiche) => (
                      <div key={guiche.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <p className="font-bold text-gray-900">Guichê {guiche.numero}</p>
                          <p className="text-sm text-gray-600">{guiche.nome}</p>
                        </div>
                        <button
                          onClick={() => removerGuiche(guiche.id)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Aba Usuários */}
            {abaSelecionada === 'usuarios' && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Adicionar Novo Usuário</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                      type="text"
                      placeholder="Nome de usuário"
                      value={novoUsuario.username}
                      onChange={(e) => setNovoUsuario({ ...novoUsuario, username: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="password"
                      placeholder="Senha"
                      value={novoUsuario.password}
                      onChange={(e) => setNovoUsuario({ ...novoUsuario, password: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select
                      value={novoUsuario.guicheId}
                      onChange={(e) => setNovoUsuario({ ...novoUsuario, guicheId: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sem guichê</option>
                      {guiches.map((guiche) => (
                        <option key={guiche.id} value={guiche.id}>
                          Guichê {guiche.numero} - {guiche.nome}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={adicionarUsuario}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Usuários Cadastrados</h3>
                  <div className="space-y-3">
                    {usuarios.map((usuario) => (
                      <div key={usuario.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-bold text-gray-900">{usuario.username}</p>
                          <div className="mt-2 flex items-center space-x-2">
                            <span className="text-sm text-gray-600">Guichê:</span>
                            <select
                              value={usuario.guicheId || ''}
                              onChange={(e) => vincularUsuarioAoGuiche(usuario.id, e.target.value)}
                              className="text-sm px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="">Sem guichê</option>
                              {guiches.map((guiche) => (
                                <option key={guiche.id} value={guiche.id}>
                                  Guichê {guiche.numero} - {guiche.nome}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        {usuario.username !== 'admin' && (
                          <button
                            onClick={() => removerUsuario(usuario.id)}
                            className="text-red-600 hover:text-red-800 transition-colors ml-4"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Aba Configuração de Senhas */}
            {abaSelecionada === 'senhas' && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Prefixos das Senhas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prefixo Normal</label>
                      <input
                        type="text"
                        maxLength={1}
                        value={configuracao.prefixoNormal}
                        onChange={(e) => setConfiguracao({ ...configuracao, prefixoNormal: e.target.value.toUpperCase() })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prefixo Prioritária</label>
                      <input
                        type="text"
                        maxLength={1}
                        value={configuracao.prefixoPrioritaria}
                        onChange={(e) => setConfiguracao({ ...configuracao, prefixoPrioritaria: e.target.value.toUpperCase() })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contadores Atuais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Próxima Senha Normal</label>
                      <input
                        type="number"
                        min="1"
                        value={configuracao.senhaAtualNormal}
                        onChange={(e) => setConfiguracao({ ...configuracao, senhaAtualNormal: parseInt(e.target.value) || 1 })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Próxima Senha Prioritária</label>
                      <input
                        type="number"
                        min="1"
                        value={configuracao.senhaAtualPrioritaria}
                        onChange={(e) => setConfiguracao({ ...configuracao, senhaAtualPrioritaria: parseInt(e.target.value) || 1 })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={salvarConfiguracao}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Salvar Configuração
                  </button>
                  <button
                    onClick={resetarSenhas}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Limpar Histórico de Senhas
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
