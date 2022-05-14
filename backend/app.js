require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan');
const cors = require('cors');

const app = express()

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(cors({
  origin: 'http://localhost:3000'
}));

// ========= Config ============
require("./tools/db");          // Database
require("./tools/swagger")(app);// Swagger
// =============================

// Routes
app.use('/', require('./routes/user'));
app.use('/', require('./routes/post'));
app.use('/', require('./routes/comment'));


app.listen(process.env.PORT, () => {
  console.log(`==================================================`)
  console.log(`Website: http://localhost:${process.env.PORT}/api/`)
  console.log(`==================================================`)
})