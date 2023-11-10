// Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
var path = require('path');
const dotenv = require('dotenv');
const postRoutes = require('./src/routes/routes');

// Setup
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(cors());
const PORT = 5001;


// Routes
app.use('/api/',postRoutes);

console.log("Server:", process.env.ATLAS_URI)

// Connect to mongo
mongoose.connect(process.env.ATLAS_URI)
.then(()=> {
    console.log('Database connected');
})
.catch((error) => {
    console.log("Error connecting to database:", error);
});

// Loading frontend build
app.use(express.static(path.resolve("../") + "/test_front_end/build"))
app.get('/', (req, res) => {
    res.sendFile(path.resolve("../") + "/test_front_end/build/index.html");
})

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})