var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')

var postRoute = require('./routes/post.route.js');
var userRoute = require('./routes/user.route.js');

mongoose.connect('mongodb://localhost/interview-home-work')
var port = 3000;

var app = express();
app.use(cors())
app.use('/posts', postRoute);
app.use('/users', userRoute);

app.listen(port, function() {
	console.log('server listening on port ' + port);
})