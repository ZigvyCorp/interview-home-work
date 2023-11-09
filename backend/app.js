const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json());
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));