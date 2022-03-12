// import dependencies
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import mainRoutes from './server/routes/route.js';

// set up dependencies
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/api/', mainRoutes);

// set up mongoose
mongoose.connect("mongodb+srv://admin:s3747274@cluster0.zhlph.mongodb.net/Tam", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> {
        console.log('Database connected');
    })
    .catch((error)=> {
        console.log('Error connecting to database');
    });

// set up port
const port = 5000;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project with Nodejs Express and MongoDB',
  });
});
app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});