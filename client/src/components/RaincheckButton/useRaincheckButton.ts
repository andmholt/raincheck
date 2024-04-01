import { useLandingStore } from '@/stores'
import { matchIsValidTel } from 'mui-tel-input'
import dayjs from 'dayjs'

export const useRaincheckButton = () => {

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

    const handleClick = () => {
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
    }

    return {
        handleClick
    }
}