const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const postRouter = require('./routes/post-router');
const app = express();
const apiPort = 8000;

//app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.get('/', (req, res) => {
    res.send("Hi");
})

app.use('/api', postRouter);

app.listen(apiPort, () => console.log(`Server is running on port ${apiPort}`))