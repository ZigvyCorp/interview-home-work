const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const users = require('./models/users');
const ExpressError = require('./utils/ExpressError');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// const userRoutes = require('./routes/userRoute');
const postRoutes = require('./routes/postRoutes');
const searchRoutes = require('./routes/searchRoutes');
// const commentRoutes = require('./routes/commentRoute');

mongoose.connect('mongodb://localhost:27017/simpleBlog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('database connected');
});

app.use('/', postRoutes);
app.use('/', searchRoutes);

app.all('*', (req, res, next) => {
  next(new ExpressError('page not found', 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = 'oh no something went wrong';
  }
  res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
  console.log('connecting on port 3000');
});
