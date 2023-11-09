const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
var path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const postRoutes = require('./src/routes/routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));


// Routes
app.use('/api/',postRoutes);

console.log("Server:", process.env.ATLAS_URI)

mongoose.connect(process.env.ATLAS_URI)
.then(()=> {
    console.log('Database connected');
})
.catch((error) => {
    console.log("Error connecting to database:", error);
});

const port = 5001;

app.use(express.static(path.resolve("../") + "/test_front_end/build"))
app.get('/', (req, res) => {
    res.sendFile(path.resolve("../") + "/test_front_end/build/index.html");
})


app.get('/api',(req,res)=> {
    res.status(200).json({
        message: "API"
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})