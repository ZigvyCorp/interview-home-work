const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('./configs/db/DBConnection')
const route = require('./routes/index')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

route(app)

db.connect()

const server = http.createServer(app)

var port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`server listening on http://127.0.0.1:${port}`)
})

