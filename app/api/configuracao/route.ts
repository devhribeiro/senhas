import { NextRequest, NextResponse } from 'next/server';
import { sql, initDatabase } from '@/lib/db-postgres';

export async function GET() {
  try {
    await initDatabase();
    const result = await sql`SELECT * FROM configuracao WHERE id = 1`;
    return NextResponse.json(result.rows[0] || {});
  } catch (error) {
    console.error('Get configuracao error:', error);
    return NextResponse.json({ error: 'Erro ao buscar configuração' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    await initDatabase();
    const { senhaAtualNormal, senhaAtualPrioritaria, prefixoNormal, prefixoPrioritaria } = await request.json();

    await sql`
      UPDATE configuracao
      SET senhaAtualNormal = ${senhaAtualNormal},
          senhaAtualPrioritaria = ${senhaAtualPrioritaria},
          prefixoNormal = ${prefixoNormal},
          prefixoPrioritaria = ${prefixoPrioritaria},
          updated_at = CURRENT_TIMESTAMP
      WHERE id = 1
    `;

    const result = await sql`SELECT * FROM configuracao WHERE id = 1`;

    return NextResponse.json({ success: true, config: result.rows[0] });
  } catch (error) {
    console.error('Update configuracao error:', error);
    return NextResponse.json({ error: 'Erro ao atualizar configuração' }, { status: 500 });
  }
}
