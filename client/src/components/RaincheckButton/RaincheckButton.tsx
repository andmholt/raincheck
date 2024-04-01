import { Button } from '@mui/material'
import { useRaincheckButton } from './useRaincheckButton'

export const RaincheckButton = () => {
    const {
        handleClick
    } = useRaincheckButton()
    return (
        <Button onClick={handleClick} variant='contained' fullWidth>
            Raincheck
        </Button>
    )
}