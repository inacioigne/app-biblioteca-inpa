import { esClient } from '@/lib/elastic/elastic';
import { NextRequest, NextResponse } from 'next/server';
import { ApiError, ApiResponse, ElasticsearchQuery, ElasticsearchResponse } from './types';
import { BuildQuery } from './buildQuery';

export async function GET(request: NextRequest) {

  try {
    const { searchParams } = request.nextUrl;
    const q: string | null = searchParams.get('q');
    const fromYear: string | null = searchParams.get('fromYear');
    const toYear: string | null = searchParams.get('toYear');
    const personalNameMain: string | null = searchParams.get('personalNameMain');
    const page: string | null = searchParams.get('page');

    const esQuery: ElasticsearchQuery = BuildQuery(
      q, 
      page ? parseInt(page) : null,
      fromYear, 
      toYear,
      personalNameMain
    )
    const response = await esClient.search({
      index: 'catalog',
      ...esQuery,
      aggs: {
        authors: {
          terms: {
            field: "personal_name_main.name.keyword"
          }},
        min_year: {
          min: {
            field: 'publication_year'
          }
        },
        max_year: {
          max: {
            field: 'publication_year'
          }
        }
      },
    })

    return NextResponse.json(response, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {

    const errorMessage: string = error instanceof Error ? error.message : 'Erro desconhecido';

    return NextResponse.json(
      {
        error: 'Erro interno do servidor',
        details: errorMessage
      } as ApiError,
      { status: 500 }
    );
  }
}

