import { NextRequest, NextResponse } from 'next/server';
import { sql, initDatabase } from '@/lib/db-postgres';

export async function GET() {
  try {
    await initDatabase();
    const result = await sql`SELECT * FROM usuarios ORDER BY created_at DESC`;
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Get usuarios error:', error);
    return NextResponse.json({ error: 'Erro ao buscar usuários' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await initDatabase();
    const { id, username, password, guicheId } = await request.json();

    await sql`INSERT INTO usuarios (id, username, password, guicheId) VALUES (${id}, ${username}, ${password}, ${guicheId || null})`;

    // Se há guichê vinculado, atualizar o guichê
    if (guicheId) {
      await sql`UPDATE guiches SET usuarioId = ${id} WHERE id = ${guicheId}`;
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
    await sql`UPDATE guiches SET usuarioId = NULL WHERE usuarioId = ${id}`;

    // Deletar usuário
    await sql`DELETE FROM usuarios WHERE id = ${id}`;

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
      await sql`UPDATE guiches SET usuarioId = NULL WHERE id = ${guicheId}`;
    }

    // Atualizar usuário
    await sql`UPDATE usuarios SET guicheId = ${guicheId || null} WHERE id = ${id}`;

    // Atualizar guichê
    if (guicheId) {
      await sql`UPDATE guiches SET usuarioId = ${id} WHERE id = ${guicheId}`;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update usuario error:', error);
    return NextResponse.json({ error: 'Erro ao atualizar usuário' }, { status: 500 });
  }
}
