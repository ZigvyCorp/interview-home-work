const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { engine } = require("express-handlebars");
const routes = require('./src/routes');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const port = 3000;

const indexRouter = require("./src/modules/comments/routes/comments.route");
const usersRouter = require("./src/modules/users/routes/users.route");
// const usersRouter = require("./src/routes/users");

const app = express();
const db = require('./config/database.config')

db.connect()
/* const urlDatabase = process.env.MONGOLAB_URI;
mongoose
  .connect(urlDatabase, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("e don connect"))
  .catch((err) => console.log(err));
 */
// view engine setup
/* app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade"); */
app.engine('hbs', engine({ extname: 'hbs', handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

module.exports = app;
