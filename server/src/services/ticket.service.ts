import { ticketRepo } from '@/repos'
import { genRandomPhoneCode } from '@/util'
import { vonageService } from './vonage.service'


type SubmitParams = {
    phoneA: string
    phoneB: string
    meetupDate: Date
}

type VerifyPhoneParams = {
    ticketId: string
    code: string
}

type GetStatusParams = {
    ticketId: string
}


const createMsg = (code: string) => 
    `So you're trying to raincheck?
    Here's your verification code: ${code}`

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

        if (matching !== null) {
            // send sms to phoneB
            return matching.id
        }

        const ticket = await ticketRepo.create({
            phoneA,
            phoneB,
            meetupDate,
            phoneACode: genRandomPhoneCode(),
            phoneBCode: genRandomPhoneCode()
        })

        // send sms to phoneA
        vonageService.sendSms({
            to: phoneA,
            text: createMsg(ticket.phoneACode)
        })
        return ticket.id
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
    },

    /**
     * Gets the status of the ticket
     */
    getStatus: async ({
        ticketId
    }: GetStatusParams) => {
        const ticket = await ticketRepo.findOneById({ ticketId })
        if (ticket === undefined) return undefined
        if (ticket.phoneAVerified && ticket.phoneBVerified) return 'CANCELLED'
        if (ticket.phoneAVerified) return 'PENDING'
        return 'UNVERIFIED'
    }
}