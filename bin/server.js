const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const Routes = require('./routes');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const process = require('process');
const morgan = require('morgan');


console.log('Starting app at:', process.cwd());
console.log('Environment:', process.env.NODE_ENV);
console.log('Server is listening on port:', process.env.PORT);


// Cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Content-Type, accept');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  if (req.method === 'OPTIONS') return res.status(200).send();
  next();
});

// Middleware to handle JSON
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
mongoose.Promise = global.Promise;

// Log Request - response
app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms'
    ].join(' ');
  })
);

// App Routes
Routes(app);

// catch 404 and 500
app.use((req, res, next) => {
  let err = new Error('Không tìm thấy trang bạn cần tìm!');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  let errorCode = err.status || 500;
  if (errorCode !== 404) {
    console.error('errorMessage:', err);
    return res.json({
      message: err.message,
      error: err
    });
  }
  return res.json({
    message: err.message,
    error: err
  });
});

// Exit handler
// Catches ctrl+c event
process.on('SIGINT', haveToExitHandler.bind(null, { exitType: 'SIGINT' }));

// Catches uncaught exceptions
process.on('uncaughtException', haveToExitHandler.bind(null, { exitType: 'uncaughtException' }));

// Do something when app is closing
process.on('exit', beforeExitHandler.bind(null, { clean: true }));

function haveToExitHandler (options, err) {
  if (err) {
    console.error('haveToExitHandler:');
    console.error('err.message: ', err.message);
    console.error('err.stack: ', err.stack);
  }
  if (options.exitType === 'uncaughtException') {
    return process.exit(1);
  }
  return process.exit(0);
}

function beforeExitHandler (options, err) {
  if (err) {
    console.error('beforeExitHandler:');
    console.error('err.message: ', err.message);
    console.error('err.stack: ', err.stack);
  }
  if (options.clean) {
    console.log('___app is now exit!');
    console.log('___GOODBYE!');
  }
}

module.exports = server;
