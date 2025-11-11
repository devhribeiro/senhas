import { NextRequest, NextResponse } from 'next/server';
import { sql, initDatabase } from '@/lib/db-postgres';

export async function POST(request: NextRequest) {
  try {
    console.log('🔵 Iniciando login...');
    console.log('🔵 POSTGRES_URL:', process.env.POSTGRES_URL ? 'Definida' : 'NÃO DEFINIDA');
    console.log('🔵 DATABASE_URL:', process.env.DATABASE_URL ? 'Definida' : 'NÃO DEFINIDA');

    await initDatabase();
    console.log('🔵 Database initialized');

    const { username, password } = await request.json();
    console.log('🔵 Tentando login para:', username);

    const result = await sql`SELECT * FROM usuarios WHERE username = ${username} AND password = ${password}`;
    console.log('🔵 Query executada, rows:', result.rows.length);

    if (result.rows.length > 0) {
      return NextResponse.json({ success: true, usuario: result.rows[0] });
    } else {
      return NextResponse.json({ success: false, message: 'Credenciais inválidas' }, { status: 401 });
    }
  } catch (error) {
    console.error('❌ Login error:', error);
    console.error('❌ Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('❌ Error stack:', error instanceof Error ? error.stack : 'No stack');
    return NextResponse.json({
      success: false,
      message: 'Erro no servidor',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
