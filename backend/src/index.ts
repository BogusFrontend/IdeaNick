import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'
import cors from 'cors'

const expressApp = express()
expressApp.use(cors())
expressApp.get('/ping', (req, res) => {
  res.send('Pong!')
})

expressApp.use('/trpc', trpcExpress.createExpressMiddleware({
  router: trpcRouter
}))

expressApp.listen(3000, () => {
  console.log('Localhost: http://localhost:3000')
})