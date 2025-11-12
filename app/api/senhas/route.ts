import { NextRequest, NextResponse } from 'next/server';
import prisma, { initDatabase } from '@/lib/db-prisma';

export async function GET() {
  try {
    await initDatabase();
    const senhas = await prisma.senhaChamada.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(senhas);
  } catch (error) {
    console.error('Get senhas error:', error);
    return NextResponse.json({ error: 'Erro ao buscar senhas' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await initDatabase();
    const { senha, guiche, horario, isPrioritaria, status } = await request.json();

    const novaSenha = await prisma.senhaChamada.create({
      data: {
        senha,
        guiche,
        horario: new Date(horario),
        isPrioritaria,
        status: status || 'chamada'
      }
    });

    return NextResponse.json({ success: true, id: novaSenha.id });
  } catch (error) {
    console.error('Create senha error:', error);
    return NextResponse.json({ error: 'Erro ao criar senha' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    await initDatabase();
    const { senha, horario, status, horarioInicio, horarioFim } = await request.json();

    // Encontrar a senha pela combinação de senha e horario
    const senhaRecord = await prisma.senhaChamada.findFirst({
      where: {
        senha: senha,
        horario: new Date(horario)
      }
    });

    if (!senhaRecord) {
      return NextResponse.json({ error: 'Senha não encontrada' }, { status: 404 });
    }

    // Atualizar senha
    const updatedSenha = await prisma.senhaChamada.update({
      where: { id: senhaRecord.id },
      data: {
        status,
        horarioInicio: horarioInicio ? new Date(horarioInicio) : null,
        horarioFim: horarioFim ? new Date(horarioFim) : null
      }
    });

    return NextResponse.json({ success: true, senha: updatedSenha });
  } catch (error) {
    console.error('Update senha error:', error);
    return NextResponse.json({ error: 'Erro ao atualizar senha' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await initDatabase();
    await prisma.senhaChamada.deleteMany({});
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete senhas error:', error);
    return NextResponse.json({ error: 'Erro ao limpar senhas' }, { status: 500 });
  }
}
