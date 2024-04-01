import { useLandingStore } from '@/stores'

export const useOtherPhone = () => {

    const [
        otherPhone,
        setOtherPhone,
        otherPhoneError
    ] = useLandingStore(s => [
        s.otherPhone,
        s.setOtherPhone,
        s.otherPhoneError
    ])

    const handleChange = (v: string) => {
        setOtherPhone(v)
    }

    return {
        otherPhone,
        handleChange,
        otherPhoneError
    }
}