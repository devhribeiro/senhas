import { NextRequest, NextResponse } from 'next/server';
import { sql, initDatabase } from '@/lib/db-postgres';

export async function GET() {
  try {
    await initDatabase();
    const result = await sql`SELECT * FROM senhas_chamadas ORDER BY created_at DESC`;
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Get senhas error:', error);
    return NextResponse.json({ error: 'Erro ao buscar senhas' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await initDatabase();
    const { senha, guiche, horario, isPrioritaria, status } = await request.json();

    const result = await sql`
      INSERT INTO senhas_chamadas (senha, guiche, horario, isPrioritaria, status)
      VALUES (${senha}, ${guiche}, ${horario}, ${isPrioritaria}, ${status || 'chamada'})
      RETURNING id
    `;

    return NextResponse.json({ success: true, id: result.rows[0].id });
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
    const senhaRecord = await sql`SELECT id FROM senhas_chamadas WHERE senha = ${senha} AND horario = ${horario}`;

    if (senhaRecord.rows.length === 0) {
      return NextResponse.json({ error: 'Senha não encontrada' }, { status: 404 });
    }

    const id = senhaRecord.rows[0].id;

    // Atualizar senha
    await sql`
      UPDATE senhas_chamadas
      SET status = ${status},
          horarioInicio = ${horarioInicio || null},
          horarioFim = ${horarioFim || null}
      WHERE id = ${id}
    `;

    const updatedSenha = await sql`SELECT * FROM senhas_chamadas WHERE id = ${id}`;

    return NextResponse.json({ success: true, senha: updatedSenha.rows[0] });
  } catch (error) {
    console.error('Update senha error:', error);
    return NextResponse.json({ error: 'Erro ao atualizar senha' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await initDatabase();
    await sql`DELETE FROM senhas_chamadas`;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete senhas error:', error);
    return NextResponse.json({ error: 'Erro ao limpar senhas' }, { status: 500 });
  }
}
