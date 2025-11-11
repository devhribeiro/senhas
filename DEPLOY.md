# Guia de Deploy na Vercel

## Problema Atual
O projeto usa SQLite (`better-sqlite3`), que **NÃO funciona na Vercel** porque ambientes serverless não têm acesso ao sistema de arquivos persistente.

## Solução: Usar Vercel Postgres

### Passo 1: Criar Banco de Dados Postgres na Vercel

1. Acesse seu projeto na Vercel
2. Vá em **Storage** → **Create Database**
3. Selecione **Postgres**
4. Crie o banco de dados
5. A Vercel irá gerar automaticamente as variáveis de ambiente

### Passo 2: Configurar Variáveis de Ambiente

As seguintes variáveis serão criadas automaticamente pela Vercel:
```
POSTGRES_URL
POSTGRES_PRISMA_URL
POSTGRES_URL_NON_POOLING
POSTGRES_USER
POSTGRES_HOST
POSTGRES_PASSWORD
POSTGRES_DATABASE
```

### Passo 3: Deploy

Após conectar o Postgres:
1. Faça push do código para o GitHub
2. A Vercel irá fazer deploy automaticamente
3. Na primeira execução, as tabelas serão criadas automaticamente

## Para Desenvolvimento Local

Se quiser testar com Postgres localmente:

1. Instale o PostgreSQL em sua máquina
2. Crie um arquivo `.env.local` na raiz do projeto:
```
POSTGRES_URL="postgres://usuario:senha@localhost:5432/senhas"
```

## Alternativa Mais Simples: Usar Vercel KV (Redis)

Se preferir algo mais simples, podemos usar Vercel KV (Redis) que é mais fácil de configurar.

## Status Atual

- ✅ Código preparado para Postgres
- ✅ Instalado @vercel/postgres
- ⚠️ Precisa conectar banco Postgres na Vercel
- ⚠️ Precisa fazer deploy após conectar banco

## Comandos Úteis

```bash
# Instalar dependências
npm install

# Rodar localmente
npm run dev

# Build de produção
npm run build
```
