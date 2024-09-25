import { Card, CardContent, Box, List, ListItem } from "@mui/material";
import { HeroSectionCard } from "./hero-section-card.component";
import { ItemWithSwich } from "./item-with-swich.component";
import imgUrl from '../assets/Lâmpadas.png'
import { styledCard } from "../assets/styles/styledCard";

const LightCard = () => {
    const params = {
        title: 'Lâmpadas',
        image: imgUrl
    }

    const list = [
        { text: 'Sala de TV (entrada)', active: true },
        { text: 'Sala de TV (painel)', active: false },
        { text: 'Suíte 1', active: false },
        { text: 'Suíte 2', active: false },
        { text: 'Escritório', active: false },
        { text: 'Cozinha', active: true },
        { text: 'Área de Serviço', active: true },
        { text: 'Corredor', active: true },
        { text: 'Sacada', active: true },
        { text: 'Garagem', active: false },
        { text: 'Entrada', active: false },
        { text: 'Fundos', active: false },
    ]
    return (
        <Card sx={styledCard}>
            <CardContent sx={{ padding: '0px' }}>
                <HeroSectionCard params={params} />
                <Box>
                    <List>
                        {list.map((item, index) => (
                            <ListItem key={index + item.text}>
                                <ItemWithSwich item={item} />
                            </ListItem>))}
                    </List>
                </Box>
            </CardContent>
        </Card >
    );
};
export default LightCard;

