import { Box, Icon, Typography } from "@mui/material";
import { FaMapMarkedAlt } from "react-icons/fa";

interface Props {
    metadata: string|number,
    label: string,
    icon: React.ReactNode,
}

export default function MetadataIcon({ 
    metadata,
    label,
    icon 
 }: Props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            maxWidth: 200,
        }}>

            <Typography variant="caption" gutterBottom>
                {label}
            </Typography>
            <Icon sx={{
                fontSize: 30,
                color: 'primary.main',
                verticalAlign: 'middle',
            }}>
                {icon}
            </Icon>
            <Typography variant="body2" gutterBottom>
                {metadata}
            </Typography>

        </Box>)
}
