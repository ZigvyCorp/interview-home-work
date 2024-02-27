require("dotenv").config();
require("colors");

// Database
require("./configs/db.config");

// App
const express = require("express");
const app = express();

// Configs
require("./configs/cors.config")(app);
require("./configs/passport.config")(app);
require("./configs/middleware.config")(app);

// Routes index
require("./routes")(app);

// Server
app.get("/", (req, res) => {
  res.json({ message: "Hello, This is backend blogs!" });
});

const PORT = process.env.PORT || 3144;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on PORT ${PORT}`.yellow.bold);
});

module.exports = app;
