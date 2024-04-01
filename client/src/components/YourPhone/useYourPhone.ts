import { useLandingStore } from '@/stores'

export const useYourPhone = () => {

    const [
        yourPhone,
        setYourPhone,
        yourPhoneError
    ] = useLandingStore(s => [
        s.yourPhone,
        s.setYourPhone,
        s.yourPhoneError
    ])

    const handleChange = (v: string) => {
        setYourPhone(v)
    }

    return {
        yourPhone,
        handleChange,
        yourPhoneError
    }
}