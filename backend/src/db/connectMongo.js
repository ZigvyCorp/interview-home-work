const mongoose = require('mongoose')

const envConfig = require('../configs/env.config')

const connectMongo = async () => {
  await mongoose.connect(envConfig.MONGO_URL)
}

module.exports = connectMongo
