import { NextFunction, Request, Router, Response } from 'express'
import { getClientOrigin } from '@/util'

export const cors: Router = Router().use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', getClientOrigin())
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    if (req.method === 'OPTIONS') {
        return res.status(200).send()
    }
    next()
})