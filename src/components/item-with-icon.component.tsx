import { Box, Typography, Avatar } from "@mui/material";

export function ItemWithIcon({ item }: {
    item: { name: string; }
}) {
    return <Box sx={{
        display: 'flex',
        width: '381px',
        height: '38px',

    }}>
        <Avatar sx={{ margin: '0px 10px' }} />
        <Typography sx={{ margin: 'auto 0px' }} typography={'body1'}>
            {item.name}
        </Typography>
    </Box>
}