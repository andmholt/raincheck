import { MuiTelInput } from 'mui-tel-input'
import { useYourPhone } from './useYourPhone'

export const YourPhone = () => {
    const{
        yourPhone,
        handleChange,
        yourPhoneError
    } = useYourPhone()
    return (
        <MuiTelInput
            label='Your phone'
            value={yourPhone}
            forceCallingCode
            onlyCountries={['US']}
            defaultCountry='US'
            error={yourPhoneError !== null}
            helperText={yourPhoneError}
            onChange={handleChange}
            fullWidth
        />
    )
}