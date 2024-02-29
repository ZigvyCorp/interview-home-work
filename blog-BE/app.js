const express = require("express");
const prisma = require("./util/prisma");
const syncDataFromJsonServer = require("./util/sync-data");
const cors = require("cors");

const postRouter = require("./routes/postRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postRouter);

prisma
  .$connect()
  .then(() => {
    console.log("success connect database");

    const port = process.env.PORT || 3000;
    syncDataFromJsonServer().then(() => {
      app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port} `);
      });
    });
  })
  .catch((err) => {
    console.error("error connecting to database", err);
  })
  .finally(() => {
    prisma.$disconnect();
  });
