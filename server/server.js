const express = require("express");
const routes = require("./routes/index");
const app = express();
const port = 8080;

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
