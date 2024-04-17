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
            label='Their phone'
            forceCallingCode
            defaultCountry='US'
            onlyCountries={['US']}
            value={otherPhone}
            error={otherPhoneError !== null}
            helperText={otherPhoneError}
            onChange={handleChange}
            fullWidth
        />
    )
}