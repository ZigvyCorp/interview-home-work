export interface IEnvConfig {
  host?: string;
}
export interface IAppEnv {
  release?: IEnvConfig;
  debug?: IEnvConfig;
}
export const ENV_BUIL_DAPP: { [key: string]: string } = {
  production: "release",
  development: "debug",
};
