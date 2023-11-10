require('express-async-errors')

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const envConfig = require('./configs/env.config')
const connectMongo = require('./db/connectMongo')
const seed = require('./helpers/seed')

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require('./routers')
const handleNotfound = require('./middlewares/handleNotfound')
const handleExceptions = require('./middlewares/handleException')

app.use('/api/v1', router)
app.use(handleNotfound)
app.use(handleExceptions)

const start = async () => {
  await connectMongo()
  console.log('Connect to mongo successfully')

  await seed()

  app.listen(envConfig.PORT, () =>
    console.log('App listen on port', envConfig.PORT),
  )
}

start()
