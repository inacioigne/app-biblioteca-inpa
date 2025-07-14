import { Aggregation } from "@/lib/types/elastic";
import { Divider, Typography } from "@mui/material";
import PublicationYear from "./publicationYear";
import Filter from "./filter";
import { ElasticsearchQuery } from "@/lib/hooks/useElasticsearch";
import Authors from "./authors";
import { useState } from "react";


interface facetProps {
    aggs: Aggregation | null;
    setAggs: (aggs: Aggregation | null) => void;
    filters: Aggregation | null;
    setFilters: (filters: Aggregation | null) => void;
    // loading: boolean;
    // error: string | null;
    // total: number;
    search: (params: string) => Promise<void>;
    // reset: () => void;
}

export default function Facet({ aggs, setAggs, setFilters, filters, search }: facetProps) {
    const [filterEnable, setFilterEnable] = useState(true)
    const [facets, setFacets] = useState({})
    const [checked, setChecked] = useState<string[]>([]);
    return (
        <>
            <Typography
                variant="h6"
                component="p"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    color: 'text.primary',
                    fontSize: '1rem',
                }}
            >
                Refine sua busca
            </Typography>
            <Divider />
            {aggs && (
                <>
                    <PublicationYear
                        setAggs={setAggs}
                        aggs={aggs}
                        setFilters={setFilters}
                        filters={filters}
                        facets={facets}
                        setFacets={setFacets}
                    />
                    <Authors
                        authors={aggs.authors}
                        filterEnable={filterEnable}
                        setFilterEnable={setFilterEnable}
                        facets={facets}
                        setFacets={setFacets}
                        checked={checked}
                        setChecked={setChecked}
                    />
                    <Filter
                        setAggs={setAggs}
                        aggs={aggs}
                        setFilters={setFilters}
                        filters={filters}
                        search={search}
                        filterEnable={filterEnable}
                        setFilterEnable={setFilterEnable}
                        facets={facets}
                        setFacets={setFacets}
                        checked={checked}
                        setChecked={setChecked}

                    />
                </>
            )}
        </>
    )
}