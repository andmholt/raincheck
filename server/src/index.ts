import 'dotenv/config'
import express from 'express'
import createError from 'http-errors'
import morgan from 'morgan'
import { router } from '@/routers'
import { cors } from '@/middleware'
import { getIsDev } from './util'
import { createServer } from 'http'
import { logger } from './util'

logger.info(`Starting in ${process.env.NODE_ENV} mode.`)

const app = express()
const server = createServer(app)

app.use(morgan(getIsDev() ? 'dev' : 'combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors)

app.use(express.static('../client/build'))
app.use('/api', router)

app.use(express.static('../client/build'))

app.use((req, res, next) => {
  next(createError(404))
});

app.use((err: any, _: express.Request, res: express.Response) => {
    res.status(err.status || 500).json(err)
})

const port = process.env.PORT || 8080
server.listen(port, () => {
    logger.info(`Server listening on port ${port}`)
})