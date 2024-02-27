import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import initWebRoutes from './route';
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

initWebRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
