import config from './config'
import logger from './utils/logger'
import app from './app'
import connectDatabase from './models'

let dbConn

try {
  dbConn = connectDatabase()

  app.listen(config.port, config.host, () => {
    logger.info(`🔥 Server is running at ${config.serverAddress} in ${config.env} mode`)
  })
} catch (err) {
  logger.error('⚡ Server error: ', err)
}

if (!dbConn) {
  process.exit(1)
}

process.on('unhandledRejection', reason => {
  logger.error('Unhandled Rejection', reason)
  process.exit(1)
})

process.on('uncaughtException', reason => {
  logger.error('Uncaught exception', reason)
  process.exit(1)
})
