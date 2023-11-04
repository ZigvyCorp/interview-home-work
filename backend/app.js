const express = require('express')
const app = express()
require('dotenv').config()
const router = require('./api/router')
const { isConnect } = require('./db/connectDB')

isConnect.then(
    () => {
        console.log('Connected to the database!')
        app.listen(process.env.PORT, process.env.HOST, (err) => {
            if (err) throw err
            console.log('Backend is running on', process.env.HOST, 'at', process.env.PORT)
            app.use(express.json())
            app.use(router)
        })
    },
    () => {
        console.log('Connecting to database failed!')
    }
)