-- Script SQL para criar as tabelas do banco de dados
-- Execute este script diretamente no seu banco de dados Prisma

-- Criar tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  "guicheId" TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de guichês
CREATE TABLE IF NOT EXISTS guiches (
  id TEXT PRIMARY KEY,
  numero TEXT NOT NULL,
  nome TEXT NOT NULL,
  "usuarioId" TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de senhas chamadas
CREATE TABLE IF NOT EXISTS senhas_chamadas (
  id SERIAL PRIMARY KEY,
  senha TEXT NOT NULL,
  guiche TEXT NOT NULL,
  horario TIMESTAMP NOT NULL,
  "isPrioritaria" BOOLEAN NOT NULL,
  status TEXT DEFAULT 'chamada',
  "horarioInicio" TIMESTAMP,
  "horarioFim" TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela de configuração
CREATE TABLE IF NOT EXISTS configuracao (
  id INTEGER PRIMARY KEY DEFAULT 1,
  "senhaAtualNormal" INTEGER NOT NULL DEFAULT 1,
  "senhaAtualPrioritaria" INTEGER NOT NULL DEFAULT 1,
  "prefixoNormal" TEXT NOT NULL DEFAULT 'N',
  "prefixoPrioritaria" TEXT NOT NULL DEFAULT 'P',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT single_row CHECK (id = 1)
);

-- Inserir usuário admin se não existir
INSERT INTO usuarios (id, username, password)
VALUES ('1', 'admin', 'admin')
ON CONFLICT (username) DO NOTHING;

-- Inserir configuração padrão se não existir
INSERT INTO configuracao (id, "senhaAtualNormal", "senhaAtualPrioritaria", "prefixoNormal", "prefixoPrioritaria")
VALUES (1, 1, 1, 'N', 'P')
ON CONFLICT (id) DO NOTHING;
