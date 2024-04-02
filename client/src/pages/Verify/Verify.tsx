import { VerifyPhoneCode } from '@/components'
import { Box, Container, Typography } from '@mui/material'

export const Verify = () =>
    <Container maxWidth='sm'>
        <Box sx={{ height: '80px' }} />
        <Typography variant='h3' textAlign='center'>
            verification code
        </Typography>
        <Typography sx={{ color: 'gray', textAlign: 'center' }}>(check your texts)</Typography>
        <Box sx={{ height: '40px' }} />
        <Typography textAlign='center'>
            Because only you can sabotage your own date.
        </Typography>
        <Box sx={{ height: '40px' }} />
        <VerifyPhoneCode />
    </Container>