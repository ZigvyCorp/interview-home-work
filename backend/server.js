const express = require('express');
const morgan = require("morgan");
const app = express();
const UserRouter = require('./Routes/common.routes/User.route')
const createError =require('http-errors');
const route = require("./Routes");
require('dotenv').config();

// Connect db
const db = require('./helpers/connection_mongodb')
db.connect()



// Set up for json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(morgan("combined"));

// Routes init

route(app);

// Handle error
app.use((req,res,next)=>{
    next(createError.NotFound('This route does not exist.'));
})

app.use((error,req,res,next)=>{
    res.json({
        status: error.status || 500,
        message:error.message
    })
})



const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
});