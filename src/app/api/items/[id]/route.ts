import { esClient } from '@/lib/elastic/elastic'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split('/').pop();
  try {
    if (!id) {
      return new Response(JSON.stringify(
        { error: 'ID is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } })
    }
    const response = await esClient.get({
      index: 'catalog',
      id: id,
    })
    
    return NextResponse.json(
      response._source, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })

  } catch (error) {
    
    const errorMessage: string = error instanceof Error ? error.message : 'Erro desconhecido';
    console.log("ERROR: ", errorMessage)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: errorMessage }),
       { status: 404, headers: { 'Content-Type': 'application/json' } })
  }

}