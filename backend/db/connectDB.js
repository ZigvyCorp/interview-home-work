const mongoose = require('mongoose')
require('dotenv').config({ path: '../.env' })

let isConnect = new Promise((resolve, reject) => {
    mongoose.connect(process.env.DB_URI)
    .then(() => resolve(true))
    .catch(() => reject(false))
})

module.exports = { isConnect }