const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/postRoute');
const userRoutes = require('./routes/userRoute')
const commentRoutes = require('./routes/commentRoute')

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
