"use client"
import { TPersonalNameAdded } from "@/app/api/search/types";
import { Badge, Divider, Typography, Box, Chip, Avatar, Button, styled  } from "@mui/material";
import { badgeClasses } from "@mui/material/Badge";

interface Props {
    personal_name_added?: TPersonalNameAdded[]
}



export default function Autoria({ personal_name_added }: Props) {
    const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -18px;
    right: 10px;
    // left: 10px;
  }
`;
    return (
        <div>
            <Typography variant="subtitle2" sx={{
                mt: 2,
                fontWeight: 'bold'
            }}>
                Autorias:
            </Typography>
            <Divider />
            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {personal_name_added?.map((personal_name_added, index) => (
                      <Button 
                      size="small"
                      variant="outlined"
                      key={index}
                      >
                        {personal_name_added.name}
                        <CartBadge 
                        badgeContent={personal_name_added.relator} 
                        color="primary" overlap="circular"
                        />
                        
                        </Button>
            ))}
            </Box>
        </div>
    )
}