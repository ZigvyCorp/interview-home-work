var express = require('express')
const cors = require('cors');
var app = express();
const { initModels } = require('./models/init'); 
const routes = require('./routes/prefixes');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api', routes);


initModels().then(() => {
    console.log('All models were synchronized successfully.');
});

app.listen(process.env.APP_PORT,async()=>{
    console.log('server running on port '+process.env.APP_PORT);
})