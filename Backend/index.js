const express = require('express')
const bodyParser = require('body-parser')
const connectDb = require('./config/connectDb')
const cors = require('cors')
const routes = require('./route')
require('dotenv').config()


const PORT = process.env.PORT || 7070
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
}));


routes(app)

connectDb()


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))