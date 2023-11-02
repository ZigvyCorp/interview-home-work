import express from "express";
import { initWebRoutes } from "./route/web.js"
import { GetPosts } from "./controllers/postController.js";
require('dotenv').config();
var cors = require('cors')
let app = express();
app.use(cors({
    origin: process.env.URL_REACT, // Đặt nguồn gốc cho các yêu cầu được phép
    credentials: true, // Cho phép chứng thực (cookies) trong yêu cầu


}));

initWebRoutes(app)

let port = process.env.PORT || 6969;
console.log("Port: " + port)
app.listen(port, () => {
    //callback
    console.log("Backend NodeJs is running on the port: " + port)
});
