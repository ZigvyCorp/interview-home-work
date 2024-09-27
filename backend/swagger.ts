require("dotenv").config();
const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger_output.json'
const glob = require('glob')
const endpointsFiles = glob.sync('./api/routes/*.ts', {
    ignore: ['./api/routes/index.ts']
})

const docs = {
    info: {
        title: 'My API',
        description: 'API Documentation',
    },
    host: `localhost:${process.env.PORT}/api`,
    schemes: ['http'],
    tags: [
        {
            "name": "Posts",
            "description": "Endpoints related to post operation"
        }
    ],
    securityDefinitions: {
        apiKeyAuth: { 
            type: 'apiKey',
            in: 'header', 
            name: 'Authorization', 
            description: "Please enter JWT or API Key with Bearer into field"
        }
    }
};

swaggerAutogen(outputFile, endpointsFiles, docs).then(() => {
    console.log('Swagger docs generated successfully');
});