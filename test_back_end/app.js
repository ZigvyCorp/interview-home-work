const express = require('express');
const app = express();
const PORT = 3001;

app.listen(PORT, (error)=> {
    if(!error){
        console.log("Server's successfully running, App is listening on port" + PORT);
    } else{
        console.log("Server's fail to start:", error);
    }
})