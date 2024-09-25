import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';
const HeroCard = ({ hero }: {
    hero: {
        title: string;
        text: string;
        image: string;
    }
}) => {
    return (
        <Card sx={{ background: '#FFF3E0' }}>
            <CardContent>
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Box>
                        <Typography>{hero.title}</Typography>
                        <Typography>{hero.text}</Typography>
                    </Box>
                    <img src={hero.image} alt='Visão Geral' height={180} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default HeroCard;