import { Box, InputBase, TextField } from '@mui/material'
import { VerifyPhoneCodeBlock } from '../VeirfyPhoneCodeBlock'
import { useVerifyPhoneCode } from './useVerifyPhoneCode'

export const VerifyPhoneCode = () => {
    const {
        digits,
        handleChangeDigit,
        refs,
        handleDeleteDigit,
        error,
        isPending
    } = useVerifyPhoneCode()
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {digits.map((d, i) =>
            <Box sx={{ display: 'flex' }} key={i}>
                <VerifyPhoneCodeBlock
                    disabled={isPending}
                    error={error}
                    value={digits[i]}
                    onDelete={() => handleDeleteDigit(i)}
                    onChange={(v) => handleChangeDigit(v, i)}
                    ref={refs[i]}
                />
                {i !== digits.length - 1 && <Box sx={{ width: '15px' }} />}
            </Box>
            )}
        </Box>
    )
}