import Highlights from "@/components/highlights";
import SearchBar from "@/components/searchBar";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Box
        id="hero"
        sx={{
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
          colorScheme: 'light',
          '@media (prefers-color-scheme: dark)': {
            backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
          }
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 10 },
            pb: { xs: 8, sm: 12 }
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{
              alignItems: 'center',
              width: { xs: '100%', sm: '70%' },
            }}
          >
            <Stack spacing={1} alignItems="center" justifyContent="center" width="100%">
              <Image src="/logo/vitoria_regia.png" alt="" width={100} height={100} />
              <Typography
                variant="h1"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                }} >
                &nbsp;Biblioteca&nbsp;
                <Typography
                  component="span"
                  variant="h1"
                  sx={{
                    fontSize: 'inherit',
                    color: 'primary.main',
                    '@media (prefers-color-scheme: dark)': {
                      color: 'primary.light',
                    }
                  }}
                >
                  &nbsp;INPA
                </Typography>
              </Typography>
            </Stack>
            <SearchBar />
          </Stack>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <Highlights />
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
