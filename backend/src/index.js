import dotenv from 'dotenv';
import express from 'express';
import conn from './api/database/connect';
import router from './api/routes';


dotenv.config();
const app = express();

// Setup routes
// Base route
app.get('/', (req, res) => res.send('Hello world!'));

// Other routes
router(app);

const PORT = process.env.PORT || 3000;

// Connect to database
conn()
    .then(() => {
        // Notify connected
        console.log('Database is connected');

        // Make app listen at port
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`);
        });
    })
    .catch((err) => {
        console.log(err);
    });