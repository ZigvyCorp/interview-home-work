require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//initdb
require("./dbs/init.postgres");
// checkOverLoad();

// init route
app.use("/", require("./routes"));

app.use((req, res, next) => {
    const error = new Error("not found");
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    return res.status(statusCode).json({
        status: "error",
        code: statusCode,
        message: err.message || "Internal Server Error",
        stack: err.stack,
    });
});

module.exports = app;
