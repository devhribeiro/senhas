'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Navigation from '../components/Navigation';
import { SenhaChamada, Guiche } from '../types';
import { api } from '@/lib/api';

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [senhasChamadas, setSenhasChamadas] = useState<SenhaChamada[]>([]);
  const [guiches, setGuiches] = useState<Guiche[]>([]);
  const [totalSenhasHoje, setTotalSenhasHoje] = useState(0);
  const [tempoMedioAtendimento, setTempoMedioAtendimento] = useState<string>('--');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
      return;
    }

    loadData();
    const interval = setInterval(loadData, 3000);
    return () => clearInterval(interval);
  }, [isAuthenticated, router]);

  const calcularTempoAtendimento = (senha: SenhaChamada): string | null => {
    if (senha.horarioInicio && senha.horarioFim) {
      const inicio = new Date(senha.horarioInicio).getTime();
      const fim = new Date(senha.horarioFim).getTime();
      const diffMs = fim - inicio;
      const diffMinutes = Math.floor(diffMs / 60000);
      const diffSeconds = Math.floor((diffMs % 60000) / 1000);
      return `${diffMinutes}m ${diffSeconds}s`;
    }
    return null;
  };

  const loadData = async () => {
    try {
      const [senhasData, guichesData] = await Promise.all([
        api.getSenhas(),
        api.getGuiches()
      ]);

      const hoje = new Date().toLocaleDateString();
      const senhasHoje = senhasData.filter((s: SenhaChamada) => {
        const dataSenha = new Date(s.horario).toLocaleDateString();
        return dataSenha === hoje;
      });

      // Calcular tempo médio de atendimento
      const senhasFinalizadas = senhasHoje.filter(
        (s: SenhaChamada) => s.status === 'finalizada' && s.horarioInicio && s.horarioFim
      );

      if (senhasFinalizadas.length > 0) {
        const somaTempo = senhasFinalizadas.reduce((acc: number, s: SenhaChamada) => {
          const inicio = new Date(s.horarioInicio!).getTime();
          const fim = new Date(s.horarioFim!).getTime();
          return acc + (fim - inicio);
        }, 0);

        const mediaMs = somaTempo / senhasFinalizadas.length;
        const mediaMinutes = Math.floor(mediaMs / 60000);
        const mediaSeconds = Math.floor((mediaMs % 60000) / 1000);
        setTempoMedioAtendimento(`${mediaMinutes}m ${mediaSeconds}s`);
      } else {
        setTempoMedioAtendimento('--');
      }

      setSenhasChamadas(senhasData.slice(-10).reverse());
      setTotalSenhasHoje(senhasHoje.length);
      setGuiches(guichesData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Visão geral do sistema de atendimento</p>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Senhas Hoje</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{totalSenhasHoje}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Guichês Ativos</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{guiches.length}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <svg
                  className="w-8 h-8 text-green-600"
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
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Última Senha</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {senhasChamadas[0]?.senha || '-'}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tempo Médio</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{tempoMedioAtendimento}</p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-lg">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela de últimas senhas chamadas */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Últimas Senhas Chamadas</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Senha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Guichê
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tempo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Horário
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {senhasChamadas.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      Nenhuma senha chamada ainda
                    </td>
                  </tr>
                ) : (
                  senhasChamadas.map((senha, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-lg font-bold text-gray-900">{senha.senha}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{senha.guiche}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            senha.isPrioritaria
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {senha.isPrioritaria ? 'Prioritária' : 'Normal'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            senha.status === 'atendendo'
                              ? 'bg-green-100 text-green-800'
                              : senha.status === 'finalizada'
                              ? 'bg-blue-100 text-blue-800'
                              : senha.status === 'nao_compareceu'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {senha.status === 'atendendo'
                            ? 'Atendendo'
                            : senha.status === 'finalizada'
                            ? 'Finalizada'
                            : senha.status === 'nao_compareceu'
                            ? 'Não Compareceu'
                            : 'Chamada'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {calcularTempoAtendimento(senha) || '--'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(senha.horario).toLocaleString('pt-BR')}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
