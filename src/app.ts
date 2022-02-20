import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import Routes from './routes';


export default new class App {

    private app: express.Application;

    constructor(){
        this.config();
        this.getRoutes();
    }
    
    private config(): void {
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
        this.app.use(cors());
    }

    private getRoutes(): void {
        this.app = Routes.user(this.app);
        this.app = Routes.post(this.app);
        this.app = Routes.comment(this.app);
        this.app.use('*', (req, res) => res.status(404).json('Page not found'));
    }

    public getApp(): express.Application {
        return this.app;
    }
    
}