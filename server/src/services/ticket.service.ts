import { ticketRepo } from '@/repos'


type SubmitParams = {
    phoneA: string
    phoneB: string
    meetupDate: Date
}

type VerifyPhoneParams = {
    ticketId: string
    code: number
}

export const ticketService = {

    /**
     * If a matching ticket is found, uses that ticket (raincheck).
     * Otherwise, creates a new ticket.
     */
    submit: async ({
        phoneA,
        phoneB,
        meetupDate
    }: SubmitParams) => {

        // switch phones to find the matching ticket
        const matching = await ticketRepo.findOne({
            phoneA: phoneB,
            phoneB: phoneA,
            meetupDate
        })

        // if (matching === null) {
        //     await ticketRepo.create({
        //         phoneA,
        //         phoneB,
        //         phoneACode: 
        //     })
        // } else {
        //     // 
        // }
    },

    /**
     * Tries to verify a phone. If verification is successful returns
     * `true`, otherwise `false`.
     */
    verifyPhone: async ({
        ticketId,
        code
    }: VerifyPhoneParams) => {
        
        const ticket = await ticketRepo.findOneById({ ticketId })
        if (ticket === undefined) return false

        if (ticket.phoneACode === code) {
            await ticketRepo.setPhoneAVerified()
            return true
        }
        if (ticket.phoneBCode === code) {
            await ticketRepo.setPhoneBVerified()
            return true
        }

        return false
    }
}