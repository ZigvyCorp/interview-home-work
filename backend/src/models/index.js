import mongoose from 'mongoose'

import config from '../config'
import logger from '../utils/logger'

export default () => {
  // Plugging in your own Promises Library http://mongoosejs.com/docs/promises.html
  mongoose.Promise = Promise
  mongoose.set('debug', !config.isProd)

  mongoose.connect(config.database.url, {
    keepAlive: true,
    socketTimeoutMS: 90000,
    connectTimeoutMS: 90000,
    retryWrites: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.on('error', err => {
    logger.error(`Database connection has error Err:${err}`)
  })

  mongoose.connection.on('disconnected', () => {
    logger.info('Database connection is disconnected')
  })

  return mongoose.connection
}
