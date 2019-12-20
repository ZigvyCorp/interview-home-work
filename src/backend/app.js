/* eslint-disable no-unused-vars */
const Express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./database/mongoose');
const { PORT } = require('./config');

const app = new Express();
app.use(bodyParser.json());

// Apply router by models
require('./routes')(app);

// Preference: https://expressjs.com/en/guide/error-handling.html
// Custom error handlers must be defined below require("./routes")(app)
// eslint-disable-next-line prefer-arrow-callback
app.use(function (err, _req, res, _next) {
  // eslint-disable-next-line quotes
  res.status(500).send('Something wrong with the server, please try it later!');
  throw err;
});

// Open a mongodb connection
mongoose.connect();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`);
});
