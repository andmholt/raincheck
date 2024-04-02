import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getApiBaseUrl } from '@/util'

interface GetTicketStatusParams {
    ticketId: string
}

export const useGetTicketStatus = ({ ticketId }: GetTicketStatusParams) => useQuery({
    queryKey: ['ticket', ticketId, '/status'],
    queryFn: () => axios.get(`${getApiBaseUrl()}/ticket/${ticketId}`).then(d => d.data)
})