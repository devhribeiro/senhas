import { NextRequest, NextResponse } from 'next/server';
import prisma, { initDatabase } from '@/lib/db-prisma';

export async function GET() {
  try {
    await initDatabase();
    const guiches = await prisma.guiche.findMany({
      orderBy: {
        numero: 'asc'
      }
    });
    return NextResponse.json(guiches);
  } catch (error) {
    console.error('Get guiches error:', error);
    return NextResponse.json({ error: 'Erro ao buscar guichês' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await initDatabase();
    const { id, numero, nome } = await request.json();

    await prisma.guiche.create({
      data: {
        id,
        numero,
        nome
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Create guiche error:', error);
    return NextResponse.json({ error: 'Erro ao criar guichê' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await initDatabase();
    const { id } = await request.json();

    // Desvincular usuários
    await prisma.usuario.updateMany({
      where: { guicheId: id },
      data: { guicheId: null }
    });

    // Deletar guichê
    await prisma.guiche.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete guiche error:', error);
    return NextResponse.json({ error: 'Erro ao deletar guichê' }, { status: 500 });
  }
}
