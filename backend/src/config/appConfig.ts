import dotenv from "dotenv";
import _ from 'lodash';

dotenv.config();

interface ApplicationConfig {
  serverPort: number;
  clientUrl: string;
}

const config: ApplicationConfig = {
  serverPort: _.toNumber(process.env.PORT),
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
};

export default config;
