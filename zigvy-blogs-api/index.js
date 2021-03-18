const express = require('express')
const { applyRoutes } = require('./routes')
const { getServerConfig } = require('./config')
const { cors } = require('./utilities/cors')

async function bootstrap() {
  const app = new express()
  app.use(express.json())
  app.use(cors);
  applyRoutes(app)

  const { port } = getServerConfig()

  app.listen(port, () => console.log(`Server is running on port ${port}`))
}

bootstrap();