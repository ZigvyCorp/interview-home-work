import mongoose from 'mongoose';

import { env } from '../configs/env';
import { Logger } from '../libs/logger';

const log = new Logger(__filename);

export default async () => {
    try {
        await mongoose.connect(env.database.connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        log.info(`Successfully for MongoDB connected!! ✔️`);
    } catch (err) {
        log.error(`Failed to connect to MongoDB ❌`);
        throw new Error(`Failed to connect to MongoDB ❌`);
    }
};
