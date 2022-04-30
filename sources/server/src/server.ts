import { Logger } from './libs/logger';
import { banner } from './libs/banner';

import expressLoader from './loaders/express.loader';
import winstonLoader from './loaders/winston.loader';
import mongooseLoader from './loaders/mongoose.loader';

const log = new Logger(__filename);

async function initServer() {
    // logging with winston
    winstonLoader();

    // Database with mongoose
    await mongooseLoader();

    // express
    expressLoader();
}

initServer()
    .then(() => banner(log))
    .catch((error) => log.error(`Application is crashed: ${error}`));
