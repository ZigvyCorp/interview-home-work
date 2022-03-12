import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import mainRoutes from './server/routes/route.js';

const app = express();
const password = 's3747274'
const database = 'Tam'
const port = 5000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', mainRoutes);
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project with Nodejs, Express, and MongoDB',
  });
});
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});

mongoose.connect("mongodb+srv://admin:" + password + "@cluster0.zhlph.mongodb.net/" + database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
      console.log('Database connected');
  })
  .catch((error)=> {
      console.log('Error connecting to database');
  });

