export interface Usuario {
  id: string;
  username: string;
  password: string;
  guicheId?: string;
}

export interface Guiche {
  id: string;
  numero: string;
  nome: string;
  usuarioId?: string;
}

export interface SenhaChamada {
  senha: string;
  guiche: string;
  horario: string;
  isPrioritaria: boolean;
  tipoSenha: 'N' | 'P' | 'R' | 'RP'; // N = Normal, P = Prioritária, R = Resposta Normal, RP = Resposta Prioritária
  status?: 'chamada' | 'atendendo' | 'finalizada' | 'nao_compareceu';
  horarioInicio?: string;
  horarioFim?: string;
}

export interface ConfiguracaoSenhas {
  senhaAtualNormal: number;
  senhaAtualPrioritaria: number;
  senhaAtualResposta: number;
  senhaAtualRespostaPrioritaria: number;
  prefixoNormal: string;
  prefixoPrioritaria: string;
  prefixoResposta: string;
  prefixoRespostaPrioritaria: string;
}
