const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db/mongoose');
const routes = require('./src/router/routes');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

connectDB();
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});