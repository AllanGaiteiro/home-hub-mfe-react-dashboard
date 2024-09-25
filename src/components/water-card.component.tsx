import { Card, CardContent } from "@mui/material";
import imgUrl from '../assets/Água.png'
import { HeroSectionCard } from "./hero-section-card.component";
import { styledCard } from "../assets/styles/styledCard";
import { PieChart } from "@mui/x-charts";

const WaterCard = () => {
    const params = {
        title: 'Gasto de Água',
        image: imgUrl
    }

    return (
        <Card sx={{ ...styledCard, height: 450 }} >
            <CardContent>
                <HeroSectionCard params={params} />
            </CardContent>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'Chuveiros' },
                            { id: 1, value: 15, label: 'Piscina' },
                            { id: 2, value: 20, label: 'Lava e seca' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
        </Card>
    );
};
export default WaterCard;