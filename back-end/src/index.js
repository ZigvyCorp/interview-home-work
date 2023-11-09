require('dotenv').config();
const express = require('express');
const cors = require('cors');

var corsOptions = {
    origin: '*',
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

const initRoutes = require('./routes/init.routes');
initRoutes(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Server on port ' + port);
});