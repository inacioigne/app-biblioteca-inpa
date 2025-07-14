'use client'
import { AppBar, Button, Container, Toolbar, Typography, Box, IconButton, Drawer, MenuItem, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import ColorModeIconDropdown from "@/theme/ColorModeIconDropdown";
import { useState } from "react";
import { Menu, CloseRounded } from '@mui/icons-material';
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Brand from "./brand";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: alpha(theme.palette.background.default, 0.4),
    boxShadow: theme.shadows[1],
    padding: '8px 12px',
}));

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const pathname = usePathname()

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: `calc(var(--mui-template-frameHeight, 0px) + 28px)`,
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                        <Brand />
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            <Link href="/services">
                                <Button
                                    variant="text"
                                    color="info"
                                    size="small"
                                    sx={{
                                        bgcolor: pathname === '/services' ? 'info.light' : 'transparent',
                                    }}>
                                    Serviços
                                </Button>
                            </Link>
                            <Link href="/team">
                                <Button
                                    variant="text"
                                    color="info"
                                    size="small"
                                    sx={{
                                        bgcolor: pathname === '/team' ? 'info.light' : 'transparent',
                                    }}>
                                    Quem Somos
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    variant="text"
                                    color="info"
                                    size="small"
                                    sx={{
                                        bgcolor: pathname === '/about' ? 'info.light' : 'transparent',
                                    }}>
                                    Sobre
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 1,
                                alignItems: 'center',
                                marginLeft: 'auto',
                            }}
                        >
       
                            <ColorModeIconDropdown />
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, marginLeft: 'auto', }}>
                            <ColorModeIconDropdown size="medium" />
                            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                                <Menu />
                            </IconButton>
                            <Drawer
                                anchor="top"
                                open={open}
                                onClose={toggleDrawer(false)}
                                PaperProps={{
                                    sx: {
                                        top: 'var(--template-frame-height, 0px)',
                                    },
                                }}
                            >
                                <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                        }}
                                    >
                                        <IconButton onClick={toggleDrawer(false)}>
                                            <CloseRounded />
                                        </IconButton>
                                    </Box>
                                    <MenuItem>Features</MenuItem>
                                    <MenuItem>Testimonials</MenuItem>
                                    <MenuItem>Highlights</MenuItem>
                                    <MenuItem>Pricing</MenuItem>
                                    <MenuItem>FAQ</MenuItem>
                                    <MenuItem>Blog</MenuItem>
                                    <Divider sx={{ my: 3 }} />
                                    <MenuItem>
                                        <Button color="primary" variant="contained" fullWidth>
                                            Sign up
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button color="primary" variant="outlined" fullWidth>
                                            Sign in
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}