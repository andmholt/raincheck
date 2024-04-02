import { TextField } from '@mui/material'
import { useVerifyPhoneCodeBlock } from './useVerifyPhoneCodeBlock'
import { MutableRefObject, forwardRef } from 'react'

interface VerifyPhoneCodeBlockProps {
    value: string
    onChange: (v: string) => void
    onDelete: () => void
    error: boolean
    disabled: boolean
}

export const VerifyPhoneCodeBlock = forwardRef(({
    value,
    onChange,
    onDelete,
    error,
    disabled
}: VerifyPhoneCodeBlockProps, ref: MutableRefObject<HTMLDivElement>) => {
    const { handleKeyDown } = useVerifyPhoneCodeBlock(onChange, onDelete)
    return (
        <TextField
            disabled={disabled}
            value={value}
            error={error}
            onKeyDown={handleKeyDown}
            inputProps={{
                ref: ref,
                style: {
                    textAlign: 'center',
                    height: '40px',
                    width: '25px',
                    fontSize: '24px'
                },
                inputMode: 'numeric'
            }}
        />
    )
})