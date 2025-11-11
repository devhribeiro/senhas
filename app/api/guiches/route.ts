import { NextRequest, NextResponse } from 'next/server';
import { sql, initDatabase } from '@/lib/db-postgres';

export async function GET() {
  try {
    await initDatabase();
    const result = await sql`SELECT * FROM guiches ORDER BY numero`;
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Get guiches error:', error);
    return NextResponse.json({ error: 'Erro ao buscar guichês' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await initDatabase();
    const { id, numero, nome } = await request.json();

    await sql`INSERT INTO guiches (id, numero, nome) VALUES (${id}, ${numero}, ${nome})`;

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
    await sql`UPDATE usuarios SET guicheId = NULL WHERE guicheId = ${id}`;

    // Deletar guichê
    await sql`DELETE FROM guiches WHERE id = ${id}`;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete guiche error:', error);
    return NextResponse.json({ error: 'Erro ao deletar guichê' }, { status: 500 });
  }
}
