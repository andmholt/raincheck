import {
    Container,
    Box,
    Typography
} from '@mui/material'

export const Home = () =>
    <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ height: '40px' }} />
        <Typography variant='h3'>
            Raincheck
        </Typography>
        <Box sx={{ height: '40px' }} />
        <Typography></Typography>
    </Container>