const express = require("express");
const cors = require("cors");
//
const dbConnect = require("./config/dbconnect");
const initRoutes = require("./routes");

const port = process.env.PORT || 5000;

//database
dbConnect();

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL, // Client URL
  "192.168.1.67:3000", // Client URL MOBILE
  process.env.ADMIN_URL, // Admin URL
  process.env.HOST_URL,
];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["POST", "PUT", "GET", "DELETE"],
    credentials: true,
    cookie: {
      domain: "localhost",
    },
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

//routes
initRoutes(app);

app.listen(port, () => {
  console.log("Server running on the port: " + port);
});
