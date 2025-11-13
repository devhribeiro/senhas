import { NextResponse } from 'next/server';
import prisma from '@/lib/db-prisma';

export async function POST() {
  try {
    // Verificar se o usuário admin já existe
    const adminExists = await prisma.usuario.findUnique({
      where: { username: 'admin' }
    });

    if (adminExists) {
      return NextResponse.json({
        message: 'Usuário admin já existe',
        admin: { username: adminExists.username }
      });
    }

    // Criar o usuário admin
    const admin = await prisma.usuario.create({
      data: {
        id: '1',
        username: 'admin',
        password: 'admin',
        guicheId: null
      }
    });

    return NextResponse.json({
      message: 'Usuário admin criado com sucesso!',
      admin: { username: admin.username }
    });
  } catch (error) {
    console.error('Erro ao criar admin:', error);
    return NextResponse.json({
      error: 'Erro ao criar usuário admin',
      details: error instanceof Error ? error.message : 'Erro desconhecido'
    }, { status: 500 });
  }
}
