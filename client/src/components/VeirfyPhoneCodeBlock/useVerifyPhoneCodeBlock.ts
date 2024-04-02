
export const useVerifyPhoneCodeBlock = (
    onChange: (v: string) => void,
    onDelete: () => void
) => {

    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {

        const v = e.key

        if (v === 'Backspace' || v === 'Delete') {
            onDelete()
            return
        }

        const regex = new RegExp('[0-9]+')
        if (regex.test(v)) {
            onChange(v)
        }
    }

    return {
        handleKeyDown
    }
}