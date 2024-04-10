import { Box, Container, Typography } from '@mui/material'

export const StatusCancelled = () =>
    <Container maxWidth='sm' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ height: '80px' }} />
        <Typography variant='h3'>CONGRATS 🎉</Typography>
        <Box sx={{ height: '50px' }} />
        <Typography>
            Your date already rainchecked! Looks like they changed their mind about you awhile ago...
        </Typography>
    </Container>