const express = require("express");
const cors = require("cors");
const indexRoutes = require("./routes/index.route");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Comming soon!");
});

app.use(indexRoutes);

app.listen(3001, () => {
  console.log("APP listen in port 3001");
});

//api routes
