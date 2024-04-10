import { ticketService } from '@/services'
import { Request, Response } from 'express'
import { z } from 'zod'
import { logger } from '@/util'

const SubmitBody = z.object({
    phoneA: z.string(),
    phoneB: z.string(),
    meetupDate: z.coerce.date()
})

const TicketId = z.string().uuid()

export const ticketController = {
    
    submit: async (req: Request, res: Response) => {
        let submitBody: z.infer<typeof SubmitBody>
        try {
            submitBody = SubmitBody.parse(req.body)
        } catch (e) {
            res.status(400).send(e)
            return
        }
        try {
            const ticketId = await ticketService.submit(submitBody)
            res.status(200).send({ ticketId })
        } catch (e) {
            logger.error(e)
            res.status(500).send()
        }
    },

    verifyPhone: async (req: Request, res: Response) => {
        const Code = z.string().length(6)
        let ticketId: string
        let code: string
        try {
            ticketId = TicketId.parse(req.params.ticketId)
            code = Code.parse(req.body.code)
        } catch (e) {
            res.status(400).send(e)
            return
        }
        try {
            const success = await ticketService.verifyPhone({
                ticketId,
                code
            })
            if (success) {
                res.status(200).send()
                return
            }
            res.status(403).send()
        } catch (e) {
            logger.error(e)
            res.status(500).send()
        }
    },

    getStatus: async (req: Request, res: Response) => {
        let ticketId: string
        try {
            ticketId = TicketId.parse(req.params.ticketId)
        } catch (e) {
            res.status(400).send(e)
            return
        }
        try {
            const status = await ticketService.getStatus({ ticketId })
            if (status === undefined) {
                res.status(404).send()
                return
            }
            res.status(200).send({ status })
        } catch (e) {
            logger.error(e)
            res.status(500).send()
        }
    }
}