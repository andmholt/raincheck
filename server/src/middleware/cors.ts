import { NextFunction, Request, Router, Response } from 'express'
import { getOrigin } from '@/util'

export const cors: Router = Router().use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', getOrigin())
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    if (req.method === 'OPTIONS') {
        return res.status(200).send()
    }
    next()
})