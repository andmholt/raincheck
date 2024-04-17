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

interface SubmitTicketRes {
    ticketId: string
}

export const useSubmitTicket = (p?: SubmitTicketParams) => useMutation<SubmitTicketRes, Error, SubmitTicketBody>({
    ...p,
    mutationFn: async ({
            phoneA,
            phoneB,
            meetupDate
        }: SubmitTicketBody) => await axios.post(`${getApiBaseUrl()}/ticket`, {
            phoneA,
            phoneB,
            meetupDate
        }).then(d => d.data)
})