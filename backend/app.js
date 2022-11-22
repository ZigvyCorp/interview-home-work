require('dotenv').config() // sử dụng cho file env
const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors') // cho phép truy cập từ domain khác
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");
const { PORT, HOST } = require('./library/constant.js')
const app = express()

const UserRouter = require('./api/routers/userRoute')

const PostRouter = require('./api/routers/postRoute')

const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "Customer API",
        description: "Customer API Information",
        contact: {
          name: "Amazing Developer"
        },
        servers: [process.env.HOST||HOST]
      }
    },
    // ['.routes/*.js']
    apis: ['./api/routers/*.js']
  };
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  app.use(express.json())
  app.use(cors({ credentials: true, origin: "*" })); 
  app.use('/api', UserRouter)
  app.use('/api', PostRouter)

  mongoose.connect("mongodb+srv://thinhnx:1234@cluster0.xrcymyi.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {

    console.log("da ket noi thanh cong db")
  })
  .catch((e) => console.log("Khong the ket noi toi db server: " + e.message));

  app.listen(process.env.PORT||PORT, () => console.log("http://localhost:" + process.env.PORT||PORT))