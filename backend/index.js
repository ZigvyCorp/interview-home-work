const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('./routes/v1');
const connectDB = require('./utils/database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = 8000;

app.listen(PORT, () => {
    console.log("App is running!");
});

connectDB();

app.use('/api/v1', routes);


