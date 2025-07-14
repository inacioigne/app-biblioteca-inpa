import { Box, Chip, Divider, Stack, Typography } from "@mui/material";

interface Subject {
    subject_full: string;
}
interface Props {
    subjects: Subject[]
}

export default function Subjects({ subjects }: Props) {
    return (
       <div>
        <Typography variant="subtitle2" sx={{
              mt: 2,
              fontWeight: 'bold'
            }}>
              Assuntos:
            </Typography>
            <Divider />
            <Box 
            sx={{
                mt: 1,
            }}
            >
                {subjects.map((subject, index) => (
                    <Chip key={index} label={subject.subject_full} />
                ))}
            </Box>
       </div>
    )
}