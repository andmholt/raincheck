import { useVerifyPhone } from '@/services'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const useVerifyPhoneCode = () => {

    const [digits, setDigits] = useState(['', '', '', '', '', ''])
    const refs = Array.from({ length: 6 }, () => useRef<HTMLDivElement | null>(null))
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const { ticketId } = useParams()

    if (ticketId === undefined) throw new Error('ticketId is undefined')

    const { mutateAsync: verifyCode, isPending } = useVerifyPhone({
        onSuccess: () => {
            navigate(`status/${ticketId}`)
        },
        onError: () => {
            setError(true)
        }
    })

    useEffect(() => {
        if (refs[0].current) {
            refs[0].current.focus()
        }
    }, [])

    const handleSubmit = async (_digits: string[]) => {
        setError(false)
        let code = ''
        _digits.forEach(d => code += d)
        if (code.length !== 6) throw new Error('Invalid code')
        await verifyCode({
            ticketId,
            code
        })
    }

    const handleChangeDigit = (newValue: string, index: number) => {
        const _digits = new Array<string>()
        digits.forEach(d => _digits.push(d))
        _digits[index] = newValue
        setDigits(_digits)
        if (index < refs.length - 1) {
            refs[index + 1].current?.focus()
        }

        for (let i=0; i<_digits.length; ++i) {
            if (_digits[i] === '') return
        }
        handleSubmit(_digits)
    }

    const handleDeleteDigit = (index: number) => {
        const _digits = new Array<string>()
        digits.forEach(d => _digits.push(d))
        _digits[index] = ''
        setDigits(_digits)
        if (index > 0) {
            refs[index - 1].current?.focus()
        }
    }

    return {
        digits,
        handleChangeDigit,
        handleDeleteDigit,
        refs,
        error,
        isPending
    }
}