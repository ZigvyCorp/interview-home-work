import express from "express";
import connect from "./Config/DB";
import route from "./Routes/Main.Route";
const app = express();

app.use(express.json());
connect();

route(app);

app.listen(4321, () => {
  console.log("Running on 4321");
});
