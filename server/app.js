const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db'); 
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json()); 

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.listen(config.port, () => {
    console.log(`Server running on ${config.port}`);
});