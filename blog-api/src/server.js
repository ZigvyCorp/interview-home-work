import express from 'express'
import cors from 'cors'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment'
import { API_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'
import { handling404Middleware } from '~/middlewares/handling404Middleware'

const START_SERVER = () => {
  const app = express()

  app.use(cors())

  app.use(express.json())

  app.use('/api/v1', API_V1)

  app.use(handling404Middleware)

  app.use(errorHandlingMiddleware)

  app.listen( env.PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`I am running at ${ env.APP_HOST }:${ env.PORT }/`)
  })

  exitHook(() => {
    CLOSE_DB()
  })
}

(async () => {
  try {
    await CONNECT_DB()
    START_SERVER()
  } catch (error) {
    process.exit(1)
  }
})()