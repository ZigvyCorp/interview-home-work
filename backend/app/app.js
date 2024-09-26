// Import required modules and initialize the app.
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
config();
// const postRoutes = require('./routes/postRoutes');
// const commentRoutes = require('./routes/commentRoutes');
// const userRoutes = require('./routes/userRoutes');

// Initialize the Express application instance.
const app = express();
const PORT = process.env.APP_PORT;
// Middleware to parse JSON request bodies.
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // Define API routes with base path '/api'.
// app.use('/api/', postRoutes);
// app.use('/api/', commentRoutes);
// app.use('/api/', userRoutes);

// Start server on port 3000 and log message on successful start-up.
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});