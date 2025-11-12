import { NextRequest, NextResponse } from 'next/server';
import prisma, { initDatabase } from '@/lib/db-prisma';

export async function POST(request: NextRequest) {
  try {
    console.log('🔵 Iniciando login...');
    console.log('🔵 DATABASE_URL:', process.env.DATABASE_URL ? 'Definida' : 'NÃO DEFINIDA');

    await initDatabase();
    console.log('🔵 Database initialized');

    const { username, password } = await request.json();
    console.log('🔵 Tentando login para:', username);

    const usuario = await prisma.usuario.findFirst({
      where: {
        username: username,
        password: password
      }
    });
    console.log('🔵 Query executada, usuario encontrado:', !!usuario);

    if (usuario) {
      return NextResponse.json({ success: true, usuario });
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
