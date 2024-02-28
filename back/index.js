const cors = require('cors')
const http = require('http')
const express = require('express')
var cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 5000
const route = require('./routes')

app.use(
	cors({
		origin: true
	}),
)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

// Route
route(app)

server.listen(port, () => console.log(`http://localhost:${port}`))
