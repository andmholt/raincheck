import { create } from 'zustand'
import { Dayjs } from 'dayjs'

interface LandingState {
    yourPhone: string
    otherPhone: string
    date: Dayjs | null
    yourPhoneError: string | null
    otherPhoneError: string | null
    dateError: string | null

    setYourPhone: (yourPhone: string) => void
    setOtherPhone: (otherPhone: string) => void
    setDate: (date: Dayjs | null) => void
    setYourPhoneError: (yourPhoneError: string | null) => void
    setOtherPhoneError: (otherPhoneError: string | null) => void
    setDateError: (dateError: string | null) => void
}

export const useLandingStore = create<LandingState>((set) => ({
    yourPhone: '',
    otherPhone: '',
    date: null,
    yourPhoneError: null,
    otherPhoneError: null,
    dateError: null,

    setYourPhone: (yourPhone) => set({ yourPhone }),
    setOtherPhone: (otherPhone) => set({ otherPhone }),
    setDate: (date) => set({ date }),
    setYourPhoneError: (yourPhoneError) => set({ yourPhoneError }),
    setOtherPhoneError: (otherPhoneError) => set({ otherPhoneError }),
    setDateError: (dateError) => set({ dateError })
}))