import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dbDir = path.join(process.cwd(), 'data');
const dbPath = path.join(dbDir, 'senhas.db');

// Criar diretório se não existir
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Sempre criar ou conectar ao banco
const db = new Database(dbPath);

// Habilitar foreign keys
db.pragma('foreign_keys = ON');

// Criar tabelas se não existirem
function initializeDatabase() {
  // Tabela de usuários
  db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id TEXT PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      guicheId TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tabela de guichês
  db.exec(`
    CREATE TABLE IF NOT EXISTS guiches (
      id TEXT PRIMARY KEY,
      numero TEXT NOT NULL,
      nome TEXT NOT NULL,
      usuarioId TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tabela de senhas chamadas
  db.exec(`
    CREATE TABLE IF NOT EXISTS senhas_chamadas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      senha TEXT NOT NULL,
      guiche TEXT NOT NULL,
      horario DATETIME NOT NULL,
      isPrioritaria INTEGER NOT NULL,
      status TEXT DEFAULT 'chamada',
      horarioInicio DATETIME,
      horarioFim DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tabela de configuração
  db.exec(`
    CREATE TABLE IF NOT EXISTS configuracao (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      senhaAtualNormal INTEGER NOT NULL DEFAULT 1,
      senhaAtualPrioritaria INTEGER NOT NULL DEFAULT 1,
      prefixoNormal TEXT NOT NULL DEFAULT 'N',
      prefixoPrioritaria TEXT NOT NULL DEFAULT 'P',
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Inserir usuário admin padrão se não existir
  const adminExists = db.prepare('SELECT COUNT(*) as count FROM usuarios WHERE username = ?').get('admin') as { count: number };
  if (adminExists.count === 0) {
    db.prepare('INSERT INTO usuarios (id, username, password) VALUES (?, ?, ?)').run('1', 'admin', 'admin');
  }

  // Inserir configuração padrão se não existir
  const configExists = db.prepare('SELECT COUNT(*) as count FROM configuracao').get() as { count: number };
  if (configExists.count === 0) {
    db.prepare('INSERT INTO configuracao (id, senhaAtualNormal, senhaAtualPrioritaria, prefixoNormal, prefixoPrioritaria) VALUES (?, ?, ?, ?, ?)').run(1, 1, 1, 'N', 'P');
  }
}

// Inicializar o banco ao carregar o módulo
initializeDatabase();

export default db;
