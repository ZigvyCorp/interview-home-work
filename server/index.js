const express = require('express');
const cookieParser = require('cookie-parser');
const {port} = require('./config');
const cors = require('cors')
 
const app = express();

app.use(cors());

const apiCommentRouter = require('./routers/Comments.router');
const apiPostRouter = require('./routers/Posts.router');
const apiUserRouter = require('./routers/Users.router');

app.use(express.static('public'));

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/posts',apiPostRouter);
app.use('/api/v1/users',apiUserRouter);
app.use('/api/v1/comments',apiCommentRouter);


app.get('/', function(req,res){
	res.send('hello');
})

app.listen(port , function(){
	console.log('server listening on port ' + port);
})