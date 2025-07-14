"use client"
import { TExemplar } from "@/app/api/search/types";
import { Divider, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from "react";

interface Props {
    exemplares: TExemplar[] | TExemplar
}

const columns: GridColDef[] = [
    { field: 'collection', headerName: 'Coleção', width: 130 },
    { field: 'location', headerName: 'Localização', width: 130 },
    {
        field: 'call_number',
        headerName: 'Classificação',
        width: 130,
    },
    { field: 'barcode', headerName: 'Código de Barras', width: 130 },
    {
        field: 'create_at',
        headerName: 'Data de Criação',
        sortable: false,
        width: 160,
        //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

export default function TableExs({ exemplares }: Props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    let rows: TExemplar[] = []
    if (Array.isArray(exemplares)) {
        rows = exemplares
    } else {
        rows = [{ id: 1, ...exemplares }]
    }

    if (!mounted) {
        return null;
    }

    return (
        <div>
            <Typography variant="subtitle2" sx={{
                fontWeight: 'bold'
            }}>
                Exemplares:
            </Typography>
            <Divider />
            <DataGrid
                rows={rows}
                columns={columns}
                // initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
                sx={{ border: 0 }}
            />
        </div>
    )
}