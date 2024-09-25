import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { HeroSectionCard } from './hero-section-card.component';
import imgUrl from '../assets/Família.png'
import { styledCard } from '../assets/styles/styledCard';
import { ItemWithIcon } from './item-with-icon.component';
import { Box, List, ListItem } from '@mui/material';

const UsersCard = () => {
    const params = {
        title: 'Usuários da família',
        image: imgUrl
    }

    const list = [
        { name: 'Talita Bastos' },
        { name: 'Pedro Mello', },
        { name: 'Luana Bastos Mello' },
    ]

    return (
        <Card sx={{ ...styledCard, height: 450 }}>
            <CardContent>
                <HeroSectionCard params={params} />
                <Box>
                    <List>
                        {list.map((item, index) => (
                            <ListItem key={index + item.name}>
                                <ItemWithIcon item={item} />
                            </ListItem>))}
                    </List>
                </Box>
            </CardContent>
        </Card>
    );
};
export default UsersCard;