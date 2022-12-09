const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

process.on('uncaughtException', (err) => {
  console.log('UNHANDLE REJECTION!!!, Shutting down....');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({
  path: './config.env',
});

const app = require('./app');

app.use(cors()); //! test

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
//! connect app to Database through mongoose
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successfully');
  });
//! SERVER
const port = process.env.PORT || 4000;
// const port = 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//! xử lý rejection nếu là async, tức là nếu lỗi là của async thì emit "unhandleRejection" và mình sẽ listen nó
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLE REJECTION!!!, Shutting down....');
  console.log(err.name, err.message);
  //! dòng dưới nghĩa là đợi server xử lý hết mấy requests hiện đang có(nếu có) rồi sau đó mới chạy process.exit để  tránh tắt quá đột ngột
  server.close(() => {
    process.exit(1);
  });
});
