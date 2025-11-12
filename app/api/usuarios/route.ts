import { NextRequest, NextResponse } from 'next/server';
import prisma, { initDatabase } from '@/lib/db-prisma';

export async function GET() {
  try {
    await initDatabase();
    const usuarios = await prisma.usuario.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(usuarios);
  } catch (error) {
    console.error('Get usuarios error:', error);
    return NextResponse.json({ error: 'Erro ao buscar usuários' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await initDatabase();
    const { id, username, password, guicheId } = await request.json();

    await prisma.usuario.create({
      data: {
        id,
        username,
        password,
        guicheId: guicheId || null
      }
    });

    // Se há guichê vinculado, atualizar o guichê
    if (guicheId) {
      await prisma.guiche.update({
        where: { id: guicheId },
        data: { usuarioId: id }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Create usuario error:', error);
    return NextResponse.json({ error: 'Erro ao criar usuário' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await initDatabase();
    const { id } = await request.json();

    // Desvincular guichês
    await prisma.guiche.updateMany({
      where: { usuarioId: id },
      data: { usuarioId: null }
    });

    // Deletar usuário
    await prisma.usuario.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete usuario error:', error);
    return NextResponse.json({ error: 'Erro ao deletar usuário' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    await initDatabase();
    const { id, guicheId } = await request.json();

    // Desvincular outros usuários deste guichê
    if (guicheId) {
      await prisma.guiche.update({
        where: { id: guicheId },
        data: { usuarioId: null }
      });
    }

    // Atualizar usuário
    await prisma.usuario.update({
      where: { id },
      data: { guicheId: guicheId || null }
    });

    // Atualizar guichê
    if (guicheId) {
      await prisma.guiche.update({
        where: { id: guicheId },
        data: { usuarioId: id }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update usuario error:', error);
    return NextResponse.json({ error: 'Erro ao atualizar usuário' }, { status: 500 });
  }
}
