const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const errorHandler = require('./src/middlewares/error');

const authRoutes = require('./src/routes/authRoutes');
const postRoute = require('./src/routes/postRoutes');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(mongoSanitize());

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'img-src': ["'self'", 'https: data:'],
    },
  })
);

app.use(xss());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15p
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.use(hpp());

//ROUTES MIDDLEWARE
app.use('/api', authRoutes);
app.use('/api', postRoute);

__dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(errorHandler);

const port = process.env.PORT || 9000;

io.on('connection', (socket) => {
  socket.on('comment', (msg) => {
    io.emit('new-comment', msg);
  });
});

exports.io = io;

server.listen(port, () => {
  console.log(` Server running on port ${port}`);
});
