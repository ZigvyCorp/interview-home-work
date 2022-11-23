import { IEnvConfig, ENV_BUIL_DAPP } from "./common";
import appEnv from "./app.env";

export function configEnv(): IEnvConfig {
  const envName = process.env.NODE_ENV || "development";
  const envNameApp = ENV_BUIL_DAPP[envName] || "debug";

  const currentConfig = appEnv[envNameApp];
  return currentConfig;
}
