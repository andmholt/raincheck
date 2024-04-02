import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { getApiBaseUrl } from '@/util'

interface SubmitTicketBody {
    phoneA: string
    phoneB: string
    meetupDate: Date
}

interface SubmitTicketParams {
    onSuccess?: ((data: any, variables: SubmitTicketBody, context: unknown) => unknown) | undefined,
    onError?: ((error: Error, variables: SubmitTicketBody, context: unknown) => unknown) | undefined
}

export const useSubmitTicket = (p?: SubmitTicketParams) => useMutation({
    ...p,
    mutationFn: ({
            phoneA,
            phoneB,
            meetupDate
        }: SubmitTicketBody) => axios.post(`${getApiBaseUrl()}/ticket`, {
            phoneA,
            phoneB,
            meetupDate
        }).then(d => d.data)
})