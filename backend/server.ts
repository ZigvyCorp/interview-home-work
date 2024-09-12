import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connect from "./utils/connect";
import routes from "./routes-middleware";

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App running at port ${port}`);

  connect();
  routes(app);
});
process.on("unhandledRejection", (err: Error) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
