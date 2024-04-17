import { Button, CircularProgress, Typography } from '@mui/material'
import { useRaincheckButton } from './useRaincheckButton'

export const RaincheckButton = () => {
    const {
        handleClick,
        isLoading
    } = useRaincheckButton()
    return (
        <>
            {/* <Typography>
                Because you deserve it.
            </Typography> */}
            <Button onClick={handleClick} variant='contained' fullWidth disabled={isLoading}>
                {isLoading ?
                    <CircularProgress size='24px' /> :
                    <Typography sx={{ textTransform: 'none' }}>
                        raincheck
                    </Typography>
                }
            </Button>
        </>

    )
}