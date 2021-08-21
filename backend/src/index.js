import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const db = require('./api/models');

// Test database
db.sequelize.authenticate()
    .then(console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));

app.get('/', (req, res) => res.send('Hello world!'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});