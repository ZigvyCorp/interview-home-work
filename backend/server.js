require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { UserModel, PostModel } = require("./database/db");
const authenticationRequest = require("./requestHandlers/authenticationRequest");
const blogPostRequest = require("./requestHandlers/blogPostRequest");
const postRoutes = require("./requestHandlers/restAPI/postsAPI/postRoutes");
const app = express();

const port = Number(process.env.PORT) || 8000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

authenticationRequest(app);
blogPostRequest(app);
postRoutes(app);

app.listen(port);
