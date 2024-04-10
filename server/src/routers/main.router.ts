import { Router } from 'express'
import { ticketRouter } from './ticket.router'

export const router = Router()

router.use('/ticket', ticketRouter)