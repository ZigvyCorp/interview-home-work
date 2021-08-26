const mongoose = require('mongoose');
const app = require('./app');

const DB = 'mongodb://localhost:27017/interview';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful 👌'))
  .catch(() => console.log('DB connection failed 💥'));

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}✨`);
});
