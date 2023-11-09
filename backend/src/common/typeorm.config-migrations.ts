import { DataSource } from 'typeorm';

import { typeOrmConfig } from './env';
export default new DataSource(typeOrmConfig);
