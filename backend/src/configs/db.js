'use strict'
require('dotenv').config()

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    stringConnect: process.env.DEV_DB_URI,
  },
  test: {
    stringConnect: process.env.TEST_DB_URI,
  },
  production: {
    stringConnect: process.env.PRO_DB_URI,
  },
}

module.exports = config[env];
