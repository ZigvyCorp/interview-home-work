require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan');

const app = express()

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// ========= Config ============
require("./tools/db");          // Database
require("./tools/swagger")(app);// Swagger
// =============================

// Routes
app.use('/', require('./routes/user'));
app.use('/', require('./routes/post'));
app.use('/', require('./routes/comment'));


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})