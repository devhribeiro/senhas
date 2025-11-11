import { sql } from '@vercel/postgres';

// Inicializar tabelas
export async function initDatabase() {
  try {
    // Criar tabela de usuários
    await sql`
      CREATE TABLE IF NOT EXISTS usuarios (
        id TEXT PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        guicheId TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Criar tabela de guichês
    await sql`
      CREATE TABLE IF NOT EXISTS guiches (
        id TEXT PRIMARY KEY,
        numero TEXT NOT NULL,
        nome TEXT NOT NULL,
        usuarioId TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Criar tabela de senhas chamadas
    await sql`
      CREATE TABLE IF NOT EXISTS senhas_chamadas (
        id SERIAL PRIMARY KEY,
        senha TEXT NOT NULL,
        guiche TEXT NOT NULL,
        horario TIMESTAMP NOT NULL,
        isPrioritaria BOOLEAN NOT NULL,
        status TEXT DEFAULT 'chamada',
        horarioInicio TIMESTAMP,
        horarioFim TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Criar tabela de configuração
    await sql`
      CREATE TABLE IF NOT EXISTS configuracao (
        id INTEGER PRIMARY KEY DEFAULT 1,
        senhaAtualNormal INTEGER NOT NULL DEFAULT 1,
        senhaAtualPrioritaria INTEGER NOT NULL DEFAULT 1,
        prefixoNormal TEXT NOT NULL DEFAULT 'N',
        prefixoPrioritaria TEXT NOT NULL DEFAULT 'P',
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT single_row CHECK (id = 1)
      )
    `;

    // Inserir usuário admin se não existir
    const adminCheck = await sql`SELECT COUNT(*) as count FROM usuarios WHERE username = 'admin'`;
    if (adminCheck.rows[0].count === '0') {
      await sql`INSERT INTO usuarios (id, username, password) VALUES ('1', 'admin', 'admin')`;
    }

    // Inserir configuração padrão se não existir
    const configCheck = await sql`SELECT COUNT(*) as count FROM configuracao`;
    if (configCheck.rows[0].count === '0') {
      await sql`INSERT INTO configuracao (id, senhaAtualNormal, senhaAtualPrioritaria, prefixoNormal, prefixoPrioritaria) VALUES (1, 1, 1, 'N', 'P')`;
    }

    console.log('✅ Database initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    throw error;
  }
}

export { sql };
