const express = require('express')
const app = express()
const routes = require('./api/routes/index')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
import connectMongoose from './api/config/ConnectMongo'

require('dotenv').config()
connectMongoose()

app.use(express.json())
app.use(cors())
app.use('/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile)
)
app.use('/api', routes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`[1] App is running at http://localhost:${PORT}`)
    console.log(`[2] Swagger docs is running at http://localhost:${PORT}/api-docs`)
})