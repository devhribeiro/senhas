'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { SenhaChamada } from '../types';
import { api } from '@/lib/api';

export default function Display() {
  const [senhaAtual, setSenhaAtual] = useState<SenhaChamada | null>(null);
  const [ultimasSenhas, setUltimasSenhas] = useState<SenhaChamada[]>([]);
  const [dataHora, setDataHora] = useState({ data: '', hora: '' });
  const [audioHabilitado, setAudioHabilitado] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [ultimaSenhaFalada, setUltimaSenhaFalada] = useState<string>('');

  // Usar refs para ter sempre os valores mais recentes
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioHabilitadoRef = useRef<boolean>(false);
  const ultimaSenhaFaladaRef = useRef<string>('');

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

    window.addEventListener('storage', handleStorageChange);

    return () => {
      clearInterval(interval);
      clearInterval(intervalRelogio);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const habilitarAudio = async () => {
    try {
      console.log('🎛️ Habilitando áudio...');
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      // Atualizar tanto o state quanto o ref
      setAudioContext(ctx);
      setAudioHabilitado(true);
      audioContextRef.current = ctx;
      audioHabilitadoRef.current = true;

      console.log('✅ Áudio habilitado! Estado:', {
        audioHabilitado: true,
        audioContext: ctx
      });

      // Tocar um teste de som para confirmar
      const testOsc = ctx.createOscillator();
      const testGain = ctx.createGain();
      testOsc.connect(testGain);
      testGain.connect(ctx.destination);
      testOsc.frequency.value = 659.25;
      testOsc.type = 'sine';
      const now = ctx.currentTime;
      testGain.gain.setValueAtTime(0, now);
      testGain.gain.linearRampToValueAtTime(0.5, now + 0.05);
      testGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      testOsc.start(now);
      testOsc.stop(now + 0.3);
      console.log('🔊 Som de teste tocado');
    } catch (error) {
      console.error('❌ Erro ao habilitar áudio:', error);
      alert('Erro ao habilitar o áudio. Por favor, recarregue a página.');
    }
  };

  const loadSenhas = async () => {
    try {
      const senhas = await api.getSenhas();
      console.log('📋 Senhas carregadas:', senhas.length);

      if (senhas.length > 0) {
        // Filtrar apenas senhas chamadas (status "chamada") para exibir na tela grande
        const senhasChamadas = senhas.filter((s: SenhaChamada) => s.status === 'chamada');
        console.log('📞 Senhas chamadas:', senhasChamadas.length);

        if (senhasChamadas.length > 0) {
          // Pegar a senha chamada mais recente (primeira do array pois vem DESC)
          const novaSenha = senhasChamadas[0];

          // Criar identificador único combinando senha e horário
          const identificadorNovaSenha = `${novaSenha.senha}-${novaSenha.horario}`;
          console.log('🆔 Identificador nova senha:', identificadorNovaSenha);
          console.log('🆔 Última senha falada:', ultimaSenhaFalada);

          // Atualizar a senha atual sempre
          setSenhaAtual(novaSenha);

          // Mas só tocar o som se for uma senha NOVA (diferente da última falada)
          if (identificadorNovaSenha !== ultimaSenhaFaladaRef.current) {
            console.log('🆕 Nova senha detectada! Chamando tocarSom...');
            setUltimaSenhaFalada(identificadorNovaSenha);
            ultimaSenhaFaladaRef.current = identificadorNovaSenha;
            tocarSom(novaSenha);
          } else {
            console.log('⏭️ Senha já foi falada, ignorando...');
          }
        } else {
          console.log('❌ Nenhuma senha com status "chamada"');
          // Se não há senhas chamadas, limpar a senha atual
          setSenhaAtual(null);
        }

        // Pegar as últimas 5 senhas de TODAS (independente do status)
        const ultimas = senhas.slice(senhasChamadas.length > 0 ? 1 : 0, senhasChamadas.length > 0 ? 6 : 5);
        setUltimasSenhas(ultimas);
      }
    } catch (error) {
      console.error('❌ Erro ao carregar senhas:', error);
    }
  };

  const tocarSom = (senha: SenhaChamada) => {
    console.log('=== tocarSom chamado ===');
    console.log('audioHabilitado (state):', audioHabilitado);
    console.log('audioHabilitado (ref):', audioHabilitadoRef.current);
    console.log('audioContext (state):', audioContext);
    console.log('audioContext (ref):', audioContextRef.current);
    console.log('senha:', senha);

    // Usar as refs ao invés dos states
    if (!audioHabilitadoRef.current || !audioContextRef.current) {
      console.log('❌ Áudio não habilitado ou contexto não existe (via ref)');
      return;
    }

    console.log('✅ Iniciando som para senha:', senha.senha);

    // Cancelar qualquer fala anterior antes de começar
    if (window.speechSynthesis.speaking) {
      console.log('Cancelando fala anterior');
      window.speechSynthesis.cancel();
    }

    // Tocar som de notificação (beep) - 2 bips
    console.log('🔊 Tocando beep...');
    tocarBeep();

    // Aguardar o beep terminar antes de falar (ding + dong = ~2 segundos)
    setTimeout(() => {
      // Usar Web Speech API para falar a senha e o guichê
      if ('speechSynthesis' in window) {
        // Extrair apenas o número do guichê (ex: "Guichê 1" -> "1")
        const numeroGuiche = senha.guiche.replace(/[^0-9]/g, '');
        // Formato com pausas: "Senha N003, Guichê 1"
        // Adicionar vírgula para criar uma pausa natural
        const mensagem = `Senha ${senha.senha}, Guichê ${numeroGuiche}`;

        console.log('🗣️ Falando:', mensagem);
        console.log('🔢 Número do guichê extraído:', numeroGuiche);
        console.log('📝 Guichê original:', senha.guiche);

        const utterance = new SpeechSynthesisUtterance(mensagem);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.85; // Mais devagar para melhor compreensão
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onstart = () => console.log('✅ Speech iniciado');
        utterance.onend = () => console.log('✅ Speech finalizado');
        utterance.onerror = (e) => console.error('❌ Erro no speech:', e);

        window.speechSynthesis.speak(utterance);
      } else {
        console.log('❌ speechSynthesis não disponível');
      }
    }, 2100); // 2.1 segundos para garantir que o beep terminou
  };

  const tocarBeep = () => {
    console.log('🔔 tocarBeep chamado');
    console.log('audioContext (ref):', audioContextRef.current);

    const ctx = audioContextRef.current;
    if (!ctx) {
      console.log('❌ audioContext não existe (via ref)');
      return;
    }

    try {
      console.log('🎵 Criando osciladores...');
      // "DING" - som mais agudo (E - 659.25 Hz)
      const dingOscillator = ctx.createOscillator();
      const dingGain = ctx.createGain();

      dingOscillator.connect(dingGain);
      dingGain.connect(ctx.destination);

      dingOscillator.frequency.value = 659.25; // Nota E
      dingOscillator.type = 'sine';

      const now = ctx.currentTime;
      dingGain.gain.setValueAtTime(0, now);
      dingGain.gain.linearRampToValueAtTime(0.8, now + 0.05);
      dingGain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);

      dingOscillator.start(now);
      dingOscillator.stop(now + 1.2);
      console.log('✅ DING iniciado');

      // "DONG" - som mais grave (C - 523.25 Hz) - começa 0.5s depois
      const dongOscillator = ctx.createOscillator();
      const dongGain = ctx.createGain();

      dongOscillator.connect(dongGain);
      dongGain.connect(ctx.destination);

      dongOscillator.frequency.value = 523.25; // Nota C
      dongOscillator.type = 'sine';

      const dongStart = now + 0.5;
      dongGain.gain.setValueAtTime(0, dongStart);
      dongGain.gain.linearRampToValueAtTime(0.8, dongStart + 0.05);
      dongGain.gain.exponentialRampToValueAtTime(0.01, dongStart + 1.5);

      dongOscillator.start(dongStart);
      dongOscillator.stop(dongStart + 1.5);
      console.log('✅ DONG iniciado');
    } catch (error) {
      console.error('❌ Erro ao tocar ding dong:', error);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col overflow-hidden">
      {/* Overlay para habilitar áudio */}
      {!audioHabilitado && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md text-center">
            <div className="mb-6">
              <svg
                className="w-24 h-24 mx-auto text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ativar Áudio do Sistema
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Clique no botão abaixo para ativar os anúncios de senha por voz
            </p>
            <button
              onClick={habilitarAudio}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ativar Áudio
            </button>
          </div>
        </div>
      )}

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
              {/* Badge para cada tipo de senha */}
              {senhaAtual.tipoSenha === 'N' && (
                <div className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-full text-3xl font-bold mb-4 shadow-2xl">
                  <svg className="w-10 h-10 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  NORMAL
                </div>
              )}
              {senhaAtual.tipoSenha === 'P' && (
                <div className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full text-3xl font-bold mb-4 shadow-2xl">
                  <svg className="w-10 h-10 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  PRIORITÁRIA
                </div>
              )}
              {senhaAtual.tipoSenha === 'R' && (
                <div className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-3xl font-bold mb-4 shadow-2xl">
                  <svg className="w-10 h-10 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  RESPOSTA
                </div>
              )}
              {senhaAtual.tipoSenha === 'RP' && (
                <div className="inline-flex items-center bg-purple-500 text-white px-8 py-4 rounded-full text-3xl font-bold mb-4 shadow-2xl">
                  <svg className="w-10 h-10 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  RESPOSTA PRIORITÁRIA
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
            {ultimasSenhas.map((senha, index) => {
              // Definir cores baseadas no tipo de senha
              let bgColor, borderColor, badgeColor, badgeText;
              switch (senha.tipoSenha) {
                case 'N':
                  bgColor = 'bg-blue-50';
                  borderColor = 'border-blue-300';
                  badgeColor = 'bg-blue-500';
                  badgeText = 'Normal';
                  break;
                case 'P':
                  bgColor = 'bg-orange-50';
                  borderColor = 'border-orange-300';
                  badgeColor = 'bg-orange-500';
                  badgeText = 'Prioritária';
                  break;
                case 'R':
                  bgColor = 'bg-green-50';
                  borderColor = 'border-green-300';
                  badgeColor = 'bg-green-500';
                  badgeText = 'Resposta';
                  break;
                case 'RP':
                  bgColor = 'bg-purple-50';
                  borderColor = 'border-purple-300';
                  badgeColor = 'bg-purple-500';
                  badgeText = 'Resp. Prior.';
                  break;
                default:
                  bgColor = 'bg-gray-50';
                  borderColor = 'border-gray-300';
                  badgeColor = 'bg-gray-500';
                  badgeText = 'Normal';
              }

              return (
                <div
                  key={index}
                  className={`rounded-xl p-4 border-2 transition-all ${bgColor} ${borderColor}`}
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
                    <div className="mt-2">
                      <span className={`inline-flex items-center ${badgeColor} text-white px-2 py-1 rounded text-xs font-semibold`}>
                        {badgeText}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
