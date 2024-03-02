var express       = require('express');
var createError   = require('http-errors');
var cors   = require('cors');
var cookieParser  = require('cookie-parser')
// const bodyParser = require('body-parser');
var helmet        = require('helmet')
var xss           = require('xss-clean')
var morgan        = require('morgan')


const mongoose = require('mongoose');




const pathConfig        = require('./path');
global.__base           = __dirname + '/';
global.__path_app       = __base + pathConfig.folder_app + '/';

global.__path_configs     = __path_app + pathConfig.folder_configs + '/';
global.__path_validates   = __path_app + pathConfig.folder_validates + '/';
global.__path_models      = __path_app + pathConfig.folder_models + '/';
global.__path_routers     = __path_app + pathConfig.folder_routers + '/';
global.__path_schemas     = __path_app + pathConfig.folder_schemas + '/';
global.__path_middleware  = __path_app + pathConfig.folder_middleware + '/';
global.__path_utils       = __path_app + pathConfig.folder_utils + '/';

const systemConfig    = require(__path_configs + 'system');
const databaseConfig  = require(__path_configs + 'database');


// Local variable

mongoose.connect(`mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0.1r1zsfn.mongodb.net/${databaseConfig.database}?retryWrites=true&w=majority`)
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(xss())
app.use(cors())
app.use(helmet())

app.use(cookieParser())

//local variable
app.locals.systemConfig = systemConfig;

  // Setup router
app.use('/api/v1/', require(__path_routers));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.end('Error App');
// });

 module.exports = app;
