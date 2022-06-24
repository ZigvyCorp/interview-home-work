require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;
const database = require('./config/database');
const indexRouter = require('./routes');

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());//Resource sharing
app.use(helmet());//Middleware Security
process.env.ENV == 'Development' && app.use(morgan('combined')); //logger

database.connect().then(() => {
    //Routes
    app.use(indexRouter);
    app.listen(PORT, () => {
        console.log(`App listen on port ${PORT}`);
    });
}).catch(err => console.log(err));