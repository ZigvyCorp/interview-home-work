import { EnvironmentConfig as DEV_CONF } from "./dev";
import { EnvironmentConfig as PROD_CONF } from "./prod";

const ENV_CONFIG = import.meta.env.NODE_ENV === "production" ? PROD_CONF : DEV_CONF;

export default ENV_CONFIG;
