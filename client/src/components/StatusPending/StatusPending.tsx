import { Box, Container, Typography } from '@mui/material'

export const StatusPending = () =>
    <Container maxWidth='sm' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ height: '80px' }} />
        <Typography variant='h3'>Fingers Crossed 🤞</Typography>
        <Box sx={{ height: '50px' }} />
        <Typography>
            We'll send you a text when they realize they don't want to see you either.
        </Typography>
    </Container>