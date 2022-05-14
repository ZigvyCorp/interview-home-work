const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
  },
  apis: ['./routes/*.js', './schemas/*.js'], // Do chuyền app từ file app.js, nên path được tính từ file app.js nha
};

module.exports = (app) => {
  app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options), { explorer: true }));
}

