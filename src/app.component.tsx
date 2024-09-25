import HeroCard from "./components/hero-card-component";
import UsersCard from "./components/users-card.component";
import WaterCard from "./components/water-card.component";
import heroImageGeral from './assets//Ilustração visão geral.png'
import LightCard from "./components/light-card.component";
import { Box, Grid2 } from "@mui/material";

export default function App() {
  const hero = {
    title: 'Olá, Allan!',
    text: 'Confira as informações da sua casa inteligente!',
    image: heroImageGeral
  }
  return (
    <Box
      width={2 / 3}
      alignItems={'center'}
      sx={{ margin: 'auto' }}>

      <Grid2 container spacing={2} >
        <Grid2 size={12}>
          <HeroCard hero={hero} />
        </Grid2>
        <Grid2 size={4} gridRow="span 4">
          <UsersCard />
        </Grid2>
        <Grid2 size={4} gridRow="span 4">
          <WaterCard />
        </Grid2>
        <Grid2 size={4} gridRow="span 8">
          <LightCard />
        </Grid2>

      </Grid2>
    </Box>
  );
}
