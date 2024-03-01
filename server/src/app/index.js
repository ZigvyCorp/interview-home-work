import logger from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import config from "../config/index.js";
import { ENVIROMENT } from "../constant/application.constant.js";

import routes from "../index.routes.js";
import ErrorMiddleware from "../middleware/error.middleware.js";

const init = (app) => {
  if (config.env === ENVIROMENT.DEVELOPMENT) {
    app.use(logger("dev"));
  }
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use(cors());

  app.use("/" + config.apiPrefix, routes);
  app.use(ErrorMiddleware);

  app.listen(config.port, () => {
    console.info(`API server started on port ${config.port} (${config.env})`);
  });

  process.stdout.write("Finished initialize app.\n");

  return app;
};

export default init;
