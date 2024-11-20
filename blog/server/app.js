const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const {port} = require('./const/config');
const router = require("./routes");
const app = express();
// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
//Turn on CORS
app.use(cors());

app.get("/",(req,res)=>{
    res.json({
        message:"Hello, wellcome to Zigvy"
    })
})
app.use("/api", router)
// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.send('API not found');
});


app.listen(port,()=> console.log("Backend is listening on http://localhost:"+port))