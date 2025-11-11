import { NextRequest, NextResponse } from 'next/server';
import { sql, initDatabase } from '@/lib/db-postgres';

export async function POST(request: NextRequest) {
  try {
    // Inicializar banco se necessário
    await initDatabase();

    const { username, password } = await request.json();

    const result = await sql`SELECT * FROM usuarios WHERE username = ${username} AND password = ${password}`;

    if (result.rows.length > 0) {
      return NextResponse.json({ success: true, usuario: result.rows[0] });
    } else {
      return NextResponse.json({ success: false, message: 'Credenciais inválidas' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, message: 'Erro no servidor' }, { status: 500 });
  }
}
