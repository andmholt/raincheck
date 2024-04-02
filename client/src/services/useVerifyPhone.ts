import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { getApiBaseUrl } from '@/util'

interface VerifyPhoneBody {
    ticketId: string
    code: string
}

interface VerifyPhoneParams {
    onSuccess?: ((data: any, variables: VerifyPhoneBody, context: unknown) => unknown) | undefined,
    onError?: ((error: Error, variables: VerifyPhoneBody, context: unknown) => unknown) | undefined
}

export const useVerifyPhone = (p?: VerifyPhoneParams) => useMutation({
    ...p,
    mutationFn: ({
            ticketId,
            code
        }: VerifyPhoneBody) => axios.post(`${getApiBaseUrl()}/ticket/${ticketId}/verify-phone`, {
            code
        }).then(d => d.data),
})