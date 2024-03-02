const express = require("express");
const morgan = require("morgan");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const route = require("./routes");
const db = require("./config/db");

//Connect db
db.connect();

dotenv.config();
const app = express();
const port = `${process.env.PORT}` || 8000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.use(bodyParser.json());

//HTTP logger
app.use(morgan("combined"));

//Routes init
route(app);

const server = http.createServer(app);

// 127.0.0.1
server.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
