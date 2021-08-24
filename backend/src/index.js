import dotenv from 'dotenv';
import express from 'express';
import conn from './api/database/connect';
import router from './api/routes';
import morgan from 'morgan';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
conn()
    .then(() => {
        // Notify connected
        console.log('Database is connected');

        // Config the rest
        // Body parser
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

        // Request log
        app.use(morgan('dev'));

        // Routes
        app.get('/', (req, res) => res.send('Hello world!'));
        router(app);

        // Make app listen at port
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`);
        });
    })
    .catch((err) => {
        console.log(err);
    });