import { useLandingStore } from '@/stores'
import { Dayjs } from 'dayjs'

export const useDateField = () => {

    const [
        date,
        setDate,
        dateError
    ] = useLandingStore(s => [
        s.date,
        s.setDate,
        s.dateError
    ])

    const handleChange = (v: Dayjs | null) => {
        setDate(v)
    }

    return {
        date,
        dateError,
        handleChange
    }
}