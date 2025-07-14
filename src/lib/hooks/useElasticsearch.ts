import { useCallback, useState } from "react";
import { Aggregation, Item } from "@/lib/types/elastic";

export interface ElasticsearchQuery {
    q?: string;
    size?: number;
    from?: number;
    fromYear?: number;
    toYear?: number;
}

export interface ElasticsearchResponse<T = any> {
    aggregations: Aggregation | null;
    hits: {
        total: {
            value: number;
            relation: string;
        };
        hits: Array<{
            _id: string;
            _source: T;
            _score: number;
        }>;
    };
    took: number;
    timed_out: boolean;
}

export interface UseElasticsearchReturn {
    data: Item[] | null;
    aggs: Aggregation | null;
    setAggs: (aggs: Aggregation | null) => void;
    filters: Aggregation | null;
    setFilters: (filters: Aggregation | null) => void;
    loading: boolean;
    error: string | null;
    total: number;
    search: (params: string) => Promise<void>;
    reset: () => void;
    getItem: (id: string) => Promise<Item | null>;
}

export function useElasticsearch(): UseElasticsearchReturn {
    const [data, setData] = useState<Item[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [total, setTotal] = useState(0);
    const [aggs, setAggs] = useState<Aggregation| null>(null);
    const [filters, setFilters] = useState<Aggregation| null>(null);

    const search = useCallback(async (params: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/search?${params}`)
            
            if (!response.ok) {
                throw new Error(`Erro na busca: ${response.status} ${response.statusText}`);
            }
            const result: ElasticsearchResponse = await response.json();

            setData(result.hits.hits.map(hit => hit._source));
            setAggs(result.aggregations);
            setFilters(result.aggregations);
            setTotal(result.hits.total.value);
        } catch (err) {
            console.error('Erro na busca:', err);
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
            setData(null);
            setTotal(0);
        } finally {
            setLoading(false);
        }
    }, []);

    const getItem = useCallback(async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/items?id=${id}`);
            if (!response.ok) {
                throw new Error(`Erro ao buscar item: ${response.status} ${response.statusText}`);
            }
            const item: Item = await response.json(); 
            return item;
        } catch (err) {
            console.error('Erro ao buscar item:', err);
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);      

    const reset = useCallback(() => {
        setData(null);
        setError(null);
        setTotal(0);
    }, []);

    return {
        data,
        aggs,
        setAggs,
        filters,
        setFilters,
        loading,
        error,
        total,
        search,
        reset,
        getItem
    };
}