var express = require('express')
var app = express();
const { initModels } = require('./models/init'); 
const routes = require('./routes/prefixes');
app.use(express.json());

app.use('/api', routes);


initModels().then(() => {
    console.log('All models were synchronized successfully.');
});

app.listen(80,async()=>{
    console.log('server running on port 80');
})