'use strict'
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const db = require('../configs/db')

const connectString = db.stringConnect
class Database {
  constructor() {
    this.connect()
  }
  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }
    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then(() => {
        console.log('Connected to MongoDB')
      })
      .catch((err) => {
        console.log('Error connecting to MongoDB', err)
      })
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb