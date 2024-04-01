import { Link, Typography } from '@mui/material'

export const TermsLink = () => {
    return (
        <Typography variant='caption'>
            <span>
                Message & data rates may apply.
                By Rainchecking, you agree to
                the <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>.
                We will never give out your information.
            </span>
        </Typography>
    )
}