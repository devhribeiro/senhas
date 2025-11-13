import { PrismaClient } from '../app/generated-prisma-client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prismaClientSingleton = () => {
  return new PrismaClient().$extends(withAccelerate())
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

// Função para inicializar o banco de dados (criar tabelas e dados iniciais)
export async function initDatabase() {
  try {
    // Verificar se o usuário admin existe
    const adminExists = await prisma.usuario.findUnique({
      where: { username: 'admin' }
    })

    // Se não existir, criar o usuário admin
    if (!adminExists) {
      await prisma.usuario.create({
        data: {
          id: '1',
          username: 'admin',
          password: 'admin'
        }
      })
      console.log('✅ Usuário admin criado')
    }

    // Verificar se a configuração existe
    const configExists = await prisma.configuracao.findUnique({
      where: { id: 1 }
    })

    // Se não existir, criar configuração padrão
    if (!configExists) {
      await prisma.configuracao.create({
        data: {
          id: 1,
          senhaAtualNormal: 1,
          senhaAtualPrioritaria: 1,
          senhaAtualResposta: 1,
          senhaAtualRespostaPrioritaria: 1,
          prefixoNormal: 'N',
          prefixoPrioritaria: 'P',
          prefixoResposta: 'R',
          prefixoRespostaPrioritaria: 'RP'
        }
      })
      console.log('✅ Configuração padrão criada')
    }

    console.log('✅ Database initialized successfully')
  } catch (error) {
    console.error('❌ Error initializing database:', error)
    throw error
  }
}
