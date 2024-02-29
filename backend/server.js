// const express = require("express");
// const app = express();
// const port = 5000;

// // Route mặc định
// app.get("/", (req, res) => {
//   res.send("Xin chào từ backend của bạn!");
// });

// // Khởi động máy chủ
// app.listen(port, () => {
//   console.log(`Server đang chạy tại http://localhost:${5000}`);
// });

const express = require("express");
const dbConnect = require("./configs/dbconnect");
const dbConnectLocal = require("./configs/dbconnectlocal");
const initRoutes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const dotenv = require("dotenv");

//config .env
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(cors({ credentials: true }));
app.use(cors({ origin: true, credentials: true }));

//connect database
dbConnect();
// dbConnectLocal();

//routers
initRoutes(app);

//listening port
const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log("Listening in the port: " + port);
});
