const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const rootRouter = require('./router/rootRouter');

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.use("/api", rootRouter);
const options = {
    definition: {
        info: {
            title: "API User",
            version: "1.0.0",
            description: "Swapger User"
        }
    },
    apis: ["src/swagger/index.js"]
}
const specs = swaggerJsDoc(options);
app.use("", swaggerUi.serve, swaggerUi.setup(specs));
app.listen(port, () => {
});