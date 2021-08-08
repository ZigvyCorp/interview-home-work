const express = require('express')
const app = express()
 
const route = require('./routes');
const connect = require('./config/db');

app.use(express.urlencoded({extended: true}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


connect();
route(app);
 
app.listen(3000)