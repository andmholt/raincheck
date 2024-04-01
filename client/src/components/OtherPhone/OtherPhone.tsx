import { MuiTelInput } from 'mui-tel-input'
import { useOtherPhone } from './useOtherPhone'

export const OtherPhone = () => {
    const{
        otherPhone,
        handleChange,
        otherPhoneError
    } = useOtherPhone()
    return (
        <MuiTelInput
            label="Your date's phone"
            forceCallingCode
            defaultCountry='US'
            value={otherPhone}
            error={otherPhoneError !== null}
            helperText={otherPhoneError}
            onChange={handleChange}
            fullWidth
        />
    )
}