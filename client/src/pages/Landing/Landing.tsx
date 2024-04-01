import { DateField, OtherPhone, RaincheckButton, TermsLink, YourPhone } from '@/components'
import {
    Container,
    Box,
    Typography
} from '@mui/material'

export const Landing = () =>
    <Container maxWidth='sm' sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center'
    }}>
        <Box sx={{ height: '40px' }} />
        <Typography variant='h3'>
            Raincheck
        </Typography>
        <Box sx={{ height: '40px' }} />
        <Container maxWidth='xs'>
            <Typography textAlign='center'>
                If the other person also rainchecks, you both receive a text! Otherwise, no one has to know...
            </Typography>
            <Box sx={{ height: '40px' }} />
            <YourPhone />
            <Box sx={{ height: '20px' }} />
            <OtherPhone />
            <Box sx={{ height: '20px' }} />
            <DateField />
            <Box sx={{ height: '40px' }} />
            <RaincheckButton />
            <Box sx={{ height: '10px' }} />
            <TermsLink />
        </Container>
    </Container>