const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const initRoutes = require('./routes')

require('dotenv').config()

const app = express();
const port = process.env.PORT || 8888;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB is connected!!"));

mongoose.connection.on("error", (err) => {
  console.log(`DB Connection failed: ${err.message}`);
});

initRoutes(app)

app.use('/',(req,res)=>{
    res.send("SERVER CONNECT SUCCESSFULLY")
})

app.listen(port,()=>{
    console.log("Server running on the port : " + port)
})
