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
  status?: 'chamada' | 'atendendo' | 'finalizada' | 'nao_compareceu';
  horarioInicio?: string;
  horarioFim?: string;
}

export interface ConfiguracaoSenhas {
  senhaAtualNormal: number;
  senhaAtualPrioritaria: number;
  prefixoNormal: string;
  prefixoPrioritaria: string;
}
