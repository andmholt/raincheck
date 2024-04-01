import { DatePicker } from '@mui/x-date-pickers'
import { useDateField } from './useDateField'

export const DateField = () => {
    const {
        date,
        handleChange,
        dateError
    } = useDateField()
    return (
        <DatePicker
            value={date}
            onChange={handleChange}
            slotProps={{
                textField: {
                    error: dateError !== null,
                    helperText: dateError
                }
            }}
            label='The date of the meetup'
            sx={{ width: '100%' }}
        />
    )
}