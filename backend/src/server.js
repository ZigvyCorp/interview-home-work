const express = require('express');
const middleware = require('./middleware')

const app = express();
const port = 5000

app.use(...middleware)

app.listen(port,() =>{console.log(`Server is running on ${port}`)})