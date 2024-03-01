import Joi from "joi";
import { ENVIROMENT } from "../constant/application.constant.js";
import dotenv from "dotenv";
dotenv.config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(...Object.values(ENVIROMENT))
    .default(ENVIROMENT.DEVELOPMENT),
  PORT: Joi.string().required(),
  API_PREFIX: Joi.string().default("api"),
  EXTERNAL_BASE_URL: Joi.string(),
})
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  apiPrefix: envVars.API_PREFIX,
  externalBaseUrl: envVars.EXTERNAL_BASE_URL,
};

export default config;
