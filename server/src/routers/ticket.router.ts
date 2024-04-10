import { Router } from 'express'
import { ticketController } from '@/controllers'

export const ticketRouter = Router()

ticketRouter.post('/', ticketController.submit)

ticketRouter.post('/:ticketId/verify', ticketController.verifyPhone)

ticketRouter.get('/:ticketId/status', ticketController.getStatus)