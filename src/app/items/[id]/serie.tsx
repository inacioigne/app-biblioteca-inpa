import { TSerie } from "@/app/api/search/types"
import { Box, Chip, Divider, Typography } from "@mui/material"

interface Props {
    serie: TSerie
}
export default function Serie({ serie }: Props) {
    return (
        <div>
            <Typography variant="subtitle2" sx={{
              mt: 2,
              fontWeight: 'bold'
            }}>
              Série:
            </Typography>
            <Divider />
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              mt: 1,
              gap: 1,
            }}>
            <Chip label={serie.name} />
            <Chip label={serie.number} />
            </Box>
        </div>
    )
}