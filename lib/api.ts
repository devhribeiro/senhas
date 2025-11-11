// Funções auxiliares para chamadas à API

export const api = {
  // Usuários
  async getUsuarios() {
    const response = await fetch('/api/usuarios');
    return response.json();
  },

  async createUsuario(usuario: any) {
    const response = await fetch('/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    });
    return response.json();
  },

  async deleteUsuario(id: string) {
    const response = await fetch('/api/usuarios', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    return response.json();
  },

  async updateUsuario(id: string, guicheId: string | null) {
    const response = await fetch('/api/usuarios', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, guicheId })
    });
    return response.json();
  },

  // Guichês
  async getGuiches() {
    const response = await fetch('/api/guiches');
    return response.json();
  },

  async createGuiche(guiche: any) {
    const response = await fetch('/api/guiches', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(guiche)
    });
    return response.json();
  },

  async deleteGuiche(id: string) {
    const response = await fetch('/api/guiches', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    return response.json();
  },

  // Senhas
  async getSenhas() {
    const response = await fetch('/api/senhas');
    return response.json();
  },

  async createSenha(senha: any) {
    const response = await fetch('/api/senhas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(senha)
    });
    return response.json();
  },

  async updateSenha(senha: string, horario: string, status: string, horarioInicio?: string, horarioFim?: string) {
    const response = await fetch('/api/senhas', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ senha, horario, status, horarioInicio, horarioFim })
    });
    return response.json();
  },

  async clearSenhas() {
    const response = await fetch('/api/senhas', {
      method: 'DELETE'
    });
    return response.json();
  },

  // Configuração
  async getConfiguracao() {
    const response = await fetch('/api/configuracao');
    return response.json();
  },

  async updateConfiguracao(config: any) {
    const response = await fetch('/api/configuracao', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    });
    return response.json();
  }
};
