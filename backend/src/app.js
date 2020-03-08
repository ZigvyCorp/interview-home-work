import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'

import config from './config'
import { logStream } from './utils/logger'
import router from './routes'
import passport from './passport'

const app = express()

app.use(morgan('combined', { stream: logStream }))
app.use(
  cors({
    origin: (origin, callback) => {
      let whitelist = config.cors.allowedOrigins

      if (whitelist !== '*') {
        whitelist = whitelist.split(',')
      }

      if (whitelist === '*' || whitelist.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error(`${origin} is not allowed by CORS`))
      }
    },
  }),
)
app.use(
  compression({
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false
      }

      return compression.filter(req, res)
    },
  }),
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())

app.use('/api', router)

export default app
