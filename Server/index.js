const express = require("express");
const {rootRouter} = require("./routers/root.routers");
const swaggerUi = require("swagger-ui-express");
const cors = require('cors')

const env = process.env.NODE_ENV;
const config = require("./config/config.json")[env || "development"];
const swaggerJSDoc = require("swagger-jsdoc");
const app = express();

app.use(cors())
app.use(express.json());

const options = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            title: "Movie Api",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
        components: {},
    },
    apis: ["./index.yaml"],
};

app.use("/api", rootRouter);
const swaggerSpecs = swaggerJSDoc(options);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
