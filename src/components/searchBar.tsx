'use client'
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ElasticsearchQuery } from "@/lib/hooks/useElasticsearch";

interface SearchProps {
    //   setAggs: (aggs: Aggregation) => void;
    //   aggs: Aggregation;
    //   setFilters?: (filters: Aggregation | null) => void;
    //   filters?: Aggregation | null;
    search: (params: ElasticsearchQuery) => Promise<void>;
}

export default function SearchBar() {

    const router = useRouter();
    const [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if (query.trim() === '') {
            router.push('/search')
            return
        }
        if (query.trim()) {
            router.push(`/search?q=${query.trim()}`);
        };
    };

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                p: { xs: '8px', sm: '10px' },
                display: 'flex',
                alignItems: 'center',
                width: { xs: '100%', sm: '90%', md: '80%', lg: '500px' },
                borderRadius: '8px',
                maxWidth: '100%'
            }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{
                    ml: { xs: 0.5, sm: 1 },
                    flex: 1,
                    minWidth: { xs: '100px', sm: '200px' }
                }}
                placeholder="Busque em livros, revistas, teses, artigos..."
                inputProps={{ 'aria-label': 'Busque em livros, revistas, teses, artigos...' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="menu">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}