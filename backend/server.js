require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const saltRound = 11;
const bcrypt = require("bcrypt");
const _ = require("lodash");

const app = express();

const port = Number(process.env.PORT) || 8000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", (req, res) => {});

app.post("/signup", (req, res) => {});

app.listen(port);
