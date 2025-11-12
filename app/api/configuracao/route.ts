import { NextRequest, NextResponse } from 'next/server';
import prisma, { initDatabase } from '@/lib/db-prisma';

export async function GET() {
  try {
    await initDatabase();
    const config = await prisma.configuracao.findUnique({
      where: { id: 1 }
    });
    return NextResponse.json(config || {});
  } catch (error) {
    console.error('Get configuracao error:', error);
    return NextResponse.json({ error: 'Erro ao buscar configuração' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    await initDatabase();
    const { senhaAtualNormal, senhaAtualPrioritaria, prefixoNormal, prefixoPrioritaria } = await request.json();

    const updatedConfig = await prisma.configuracao.update({
      where: { id: 1 },
      data: {
        senhaAtualNormal,
        senhaAtualPrioritaria,
        prefixoNormal,
        prefixoPrioritaria
      }
    });

    return NextResponse.json({ success: true, config: updatedConfig });
  } catch (error) {
    console.error('Update configuracao error:', error);
    return NextResponse.json({ error: 'Erro ao atualizar configuração' }, { status: 500 });
  }
}
