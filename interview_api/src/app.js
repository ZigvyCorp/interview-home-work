import express from 'express';
import cors from 'cors';
import router from './routes/index.route.js';
import { morganMiddleware } from './middleware/morgan.middleware.js';

// express app
const app = express();

// cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morganMiddleware);


app.get('/', async (req, res, next) => {
    res.send('Hello')
})

// routes
app.use('/api', router);

export default app;