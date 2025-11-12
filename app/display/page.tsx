'use client';

import { useEffect, useState } from 'react';
import { SenhaChamada } from '../types';
import { api } from '@/lib/api';

export default function Display() {
  const [senhaAtual, setSenhaAtual] = useState<SenhaChamada | null>(null);
  const [ultimasSenhas, setUltimasSenhas] = useState<SenhaChamada[]>([]);
  const [dataHora, setDataHora] = useState({ data: '', hora: '' });
  const [audioHabilitado, setAudioHabilitado] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    loadSenhas();

    // Atualizar a cada 2 segundos
    const interval = setInterval(loadSenhas, 2000);

    // Atualizar data e hora a cada segundo
    const intervalRelogio = setInterval(() => {
      const agora = new Date();
      setDataHora({
        data: agora.toLocaleDateString('pt-BR', {
          weekday: 'long',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }),
        hora: agora.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      });
    }, 1000);

    // Listener para mudanças no localStorage
    const handleStorageChange = () => {
      loadSenhas();
    };

    // Habilitar áudio automaticamente no primeiro clique/toque
    const habilitarAudioAutomatico = () => {
      if (!audioHabilitado) {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        setAudioContext(ctx);
        setAudioHabilitado(true);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('click', habilitarAudioAutomatico, { once: true });
    window.addEventListener('touchstart', habilitarAudioAutomatico, { once: true });

    return () => {
      clearInterval(interval);
      clearInterval(intervalRelogio);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('click', habilitarAudioAutomatico);
      window.removeEventListener('touchstart', habilitarAudioAutomatico);
    };
  }, [audioHabilitado]);

  const loadSenhas = async () => {
    try {
      const senhas = await api.getSenhas();

      if (senhas.length > 0) {
        // Filtrar apenas senhas chamadas (status "chamada")
        const senhasChamadas = senhas.filter((s: SenhaChamada) => s.status === 'chamada');

        if (senhasChamadas.length > 0) {
          // Pegar a senha chamada mais recente (última do array filtrado)
          const novaSenha = senhasChamadas[senhasChamadas.length - 1];

          // Se mudou a senha, tocar som
          if (senhaAtual && novaSenha.senha !== senhaAtual.senha) {
            tocarSom(novaSenha.senha);
          }

          setSenhaAtual(novaSenha);

          // Pegar as últimas 5 senhas chamadas (excluindo a atual)
          const ultimas = senhasChamadas.slice(-6, -1).reverse();
          setUltimasSenhas(ultimas);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar senhas:', error);
    }
  };

  const tocarSom = (senha: string) => {
    if (!audioHabilitado || !audioContext) {
      console.log('Áudio não habilitado ainda. Aguardando interação do usuário.');
      return;
    }

    // Tocar som de notificação (beep) antes de falar
    tocarBeep();

    // Aguardar um pouco antes de falar a senha
    setTimeout(() => {
      // Usar Web Speech API para falar a senha
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(`Senha ${senha}`);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;
        window.speechSynthesis.speak(utterance);
      }
    }, 800);
  };

  const tocarBeep = () => {
    if (!audioContext) return;

    try {
      // "DING" - som mais agudo (E - 659.25 Hz)
      const dingOscillator = audioContext.createOscillator();
      const dingGain = audioContext.createGain();

      dingOscillator.connect(dingGain);
      dingGain.connect(audioContext.destination);

      dingOscillator.frequency.value = 659.25; // Nota E
      dingOscillator.type = 'sine';

      const now = audioContext.currentTime;
      dingGain.gain.setValueAtTime(0, now);
      dingGain.gain.linearRampToValueAtTime(0.8, now + 0.05);
      dingGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);

      dingOscillator.start(now);
      dingOscillator.stop(now + 1.2);

      // "DONG" - som mais grave (C - 523.25 Hz) - começa 0.5s depois
      const dongOscillator = audioContext.createOscillator();
      const dongGain = audioContext.createGain();

      dongOscillator.connect(dongGain);
      dongGain.connect(audioContext.destination);

      dongOscillator.frequency.value = 523.25; // Nota C
      dongOscillator.type = 'sine';

      const dongStart = now + 0.5;
      dongGain.gain.setValueAtTime(0, dongStart);
      dongGain.gain.linearRampToValueAtTime(0.8, dongStart + 0.05);
      dongGain.gain.exponentialRampToValueAtTime(0.01, dongStart + 1.5);

      dongOscillator.start(dongStart);
      dongOscillator.stop(dongStart + 1.5);
    } catch (error) {
      console.log('Erro ao tocar ding dong:', error);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col overflow-hidden">
      {/* Cabeçalho com Data, Nome e Hora */}
      <div className="flex items-center justify-between px-8 py-6 flex-shrink-0">
        {/* Data - Esquerda */}
        <div className="text-white text-2xl font-semibold">
          {dataHora.data}
        </div>

        {/* Nome Central */}
        <div className="text-center">
          <h1 className="text-6xl font-black text-white drop-shadow-lg">
            PROCON SERRA
          </h1>
        </div>

        {/* Hora - Direita */}
        <div className="text-white text-4xl font-bold">
          {dataHora.hora}
        </div>
      </div>

      {/* Senha Atual - Centro */}
      <div className="flex-1 flex items-center justify-center px-8 overflow-hidden">
        {senhaAtual ? (
          <div className="text-center">
            <p className="text-3xl text-white/80 mb-4">Senha Chamada</p>
            <div className="mb-4">
              <p className="text-[18rem] leading-none font-black text-white drop-shadow-2xl mb-4">
                {senhaAtual.senha}
              </p>
              {senhaAtual.isPrioritaria && (
                <div className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full text-3xl font-bold mb-4 shadow-2xl">
                  <svg
                    className="w-10 h-10 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  PRIORITÁRIA
                </div>
              )}
            </div>
            <div className="flex items-center justify-center space-x-4 text-5xl">
              <svg
                className="w-16 h-16 text-white"
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
              <span className="font-bold text-white">{senhaAtual.guiche}</span>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-6xl text-white/60">Aguardando primeira senha...</p>
          </div>
        )}
      </div>

      {/* Últimas Senhas Chamadas - Fixo no Bottom */}
      <div className="bg-white/95 backdrop-blur w-full py-6 px-8 shadow-2xl flex-shrink-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Últimas Senhas Chamadas
        </h2>
        {ultimasSenhas.length === 0 ? (
          <p className="text-center text-gray-400 py-4">Nenhuma senha anterior</p>
        ) : (
          <div className="grid grid-cols-5 gap-4">
            {ultimasSenhas.map((senha, index) => (
              <div
                key={index}
                className={`rounded-xl p-4 border-2 transition-all ${
                  senha.isPrioritaria
                    ? 'bg-orange-50 border-orange-300'
                    : 'bg-blue-50 border-blue-300'
                }`}
              >
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-800 mb-2">
                    {senha.senha}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">{senha.guiche}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(senha.horario).toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  {senha.isPrioritaria && (
                    <div className="mt-2">
                      <span className="inline-flex items-center bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        Prioritária
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
