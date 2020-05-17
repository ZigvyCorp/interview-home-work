var mongoose = require('mongoose');

var HOST = 'localhost';
var PORT = '27017';
var DB = 'interview_homework';
var connectionString = `mongodb://${HOST}:${PORT}/${DB}`;
var opt = {
  useNewUrlParser: true,
};

mongoose.connect(connectionString, opt).then(() => {
    console.log('Connected DB');
});

require('./homepage');

console.log({ connectionString });

