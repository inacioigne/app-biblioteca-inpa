import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
export default function Brand() {
    return (
        <Box>
            <Link href="/" sx={{ textDecoration: 'none' }}>
                <Box sx={{
                    pr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}>
                    <Image src="/logo/vitoria_regia_black.png" alt="" width={40} height={40} />
                    <Typography variant="overline"
                        color="textSecondary"
                        sx={{
                            fontWeight: 'bold',
                            textTransform: 'none',
                        }}>
                        Biblioteca INPA
                    </Typography>
                </Box>
            </Link>
        </Box>
    )
}