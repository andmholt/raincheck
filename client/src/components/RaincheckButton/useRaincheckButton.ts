import { useLandingStore } from '@/stores'
import { matchIsValidTel } from 'mui-tel-input'
import dayjs from 'dayjs'
import { useSubmitTicket } from '@/services'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const useRaincheckButton = () => {

    const navigate = useNavigate()

    const [
        yourPhone,
        otherPhone,
        date,
        setYourPhoneError,
        setOtherPhoneError,
        setDateError
    ] = useLandingStore(s => [
        s.yourPhone,
        s.otherPhone,
        s.date,
        s.setYourPhoneError,
        s.setOtherPhoneError,
        s.setDateError
    ])

    const [isLoading, setIsLoading] = useState(false)

    const { mutateAsync: submitTicket } = useSubmitTicket({
        onSuccess: (d) => {
            setIsLoading(false)
            const ticketId = d.ticketId
            navigate(`/verify/${ticketId}`)
        },
        onError: () => {
            setIsLoading(false)
            console.log('Error submitting')
        }
    })

    const handleClick = async () => {
        if (!matchIsValidTel(yourPhone)) {
            setYourPhoneError('Invalid phone number')
            return
        }
        setYourPhoneError(null)

        if (!matchIsValidTel(otherPhone)) {
            setOtherPhoneError('Invalid phone number')
            return
        }
        setOtherPhoneError(null)

        if (yourPhone === otherPhone) {
            const e = 'Phone numbers cannot match'
            setYourPhoneError(e)
            setOtherPhoneError(e)
            return
        }
        setYourPhoneError(null)
        setOtherPhoneError(null)

        if (date === null) {
            setDateError('Invalid date')
            return
        }
        if (date.isBefore(dayjs(), 'day')) {
            setDateError('Date must be in the future')
            return
        }
        setDateError(null)

        setIsLoading(true)
        await submitTicket({
            phoneA: yourPhone,
            phoneB: otherPhone,
            meetupDate: date.toDate()
        })
    }

    return {
        handleClick,
        isLoading
    }
}