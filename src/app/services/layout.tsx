import { Container } from "@mui/material";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Container
            sx={{
                pt: { xs: 14, sm: 10 },
                pb: { xs: 8, sm: 12 }
            }}
        >{children}</Container>
    )
}