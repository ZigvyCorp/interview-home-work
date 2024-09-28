const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const configViewEngine = require('./config/viewEngine');
const initWebRoutes = require('./routes/index');
const { configCors } = require('./config/cors');

const app = express();
const port = 8080;

app.use(express.json());

configCors(app);
app.use(morgan('dev'));

app.use(cookieParser());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

configViewEngine(app);
initWebRoutes(app);


app.use((req, res) => {
  return res.status(404).send("404 not found");
});

app.listen(port, () => {
  console.log(`Backend Node.js is running on http://localhost:${port}`);
});
