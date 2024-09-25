import { Box, Typography, Switch } from "@mui/material";

export function ItemWithSwich({ item }: {
    item: {
        text: string;
        active: boolean;
    }
}) {
    return <Box sx={{
        display: 'flex',
        width: '381px',
        height: '38px',
        justifyContent: 'space-between'
    }}>
        <Typography typography={'body1'}>
            {item.text}
        </Typography>
        <Switch checked={item?.active || false} color='secondary' />
    </Box>
}