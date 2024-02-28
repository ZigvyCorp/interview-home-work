const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express()
const postRoute = require('./routes/post.route')
const userRoute = require('./routes/user.route')

dotenv.config()

const corsOption = {
    origin: [process.env.ORIGIN],
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}

app.use(bodyParser.json({ limit: '50mb' }))
app.use(cors(corsOption))
app.use(morgan('common'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

app.use('/posts', postRoute)
app.use('/users', userRoute)
