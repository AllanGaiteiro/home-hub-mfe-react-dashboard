import { Box, Typography } from "@mui/material";

export function HeroSectionCard({ params }: { params: { title: string, image: string } }) {
    return <Box sx={{ textAlign: 'center' }}>
        <img src={params.image} alt="" />
        <Typography typography={'h5'} sx={{
            color: 'var(--orange-900, #E65100)'
        }}>
            {params.title}
        </Typography>
    </Box>
}