//docker run --name zigvy_home_test -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=zigvy_home_test -p 5432:5432 -d postgres:13
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
