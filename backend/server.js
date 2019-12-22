const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

// 1) CONNECT TO DATABASE
const DB = process.env.DATABASE
  .replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
  .replace('<USERNAME>', process.env.DATABASE_USERNAME);


mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connection successful');
  });
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// 2) HANDLE SAFELY SHUTTING DOWN WHEN ERROR
process.on('unhandledRejection', err => {
  console.log('UNHANDLER REJECTION! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully.');
  server.close(() => {
    console.log('Process terminated!');
  });
});