const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const URI = "mongodb+srv://huy-dhk:ZIYYwY3vSuPb2bka@cluster01-q9sqy.mongodb.net/ZIGVYBLOG?retryWrites=true&w=majority";
const routes = require('./routes');

const app = express();
// config header
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
// end config header

app.use(cors());
// parse application/json
app.use(bodyParser.json());

app.use('/api', routes);

try {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
  } catch (err) {
    console.log(err);
}

app.listen(PORT, ()=>{
    //console.log(`server start at port: ${PORT}`);
});