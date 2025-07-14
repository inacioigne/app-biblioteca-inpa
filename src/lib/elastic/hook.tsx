'use client'
import { useEffect, useState } from 'react';

interface UseESParams {
  query: any;
  index: string;
}

export function useElasticsearchAPI({ query, index }: UseESParams) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {

        const res = await fetch('/api/search', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) throw new Error('Erro ao consultar a API');
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, index]);

  return { data, loading, error };
}
