import { createServer, Server } from 'http';
import dotenv from 'dotenv';
import App from './app';
import { connect } from 'mongoose';

dotenv.config();

const port: string = process.env.PORT;
const DB_CONNECT_LINK: string = process.env.DB_CONNECT_LINK;

const server: Server = createServer(App.getApp());
server.listen(port, () => console.log(`server listening on port ${port}`));

(async function runDB(): Promise<void> {
    try {
        await connect(DB_CONNECT_LINK);
        console.log('MongoDB connected !!!');
    }
    catch(err) {
        console.log(err);
        process.exit(1);
    }
})();