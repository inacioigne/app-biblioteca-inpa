import { Box, Grid, Skeleton } from "@mui/material";

export default function Loading() {
    const results = [...Array(8).keys()]
    return (
        <Grid container spacing={4}>
            {results.map((index, result) => (
                <Grid size={{ xs: 6, md: 3 }} key={result} >
                    <Box 
                    sx={{ 
                        display: 'flex', 
                        gap: 2,
                        flexDirection: 'column'
                        }}>
                        <Skeleton 
                        variant="rectangular" 
                        width={'100%'} 
                        height={150} 
                        sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10}}
                        />
                        <Skeleton 
                        variant="rectangular" 
                        width={'75%'} 
                        height={20} 
                        sx={{ ml: 1, borderRadius: 1}}
                        />
                        <Box sx={{ my: 3, width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <Skeleton 
                        variant="rectangular" 
                        width={'80%'} 
                        height={30} 
                        sx={{ borderRadius: 1}}
                        />

                        </Box>
                        


                    </Box>

                </Grid>
            ))}


        </Grid>
    )
}