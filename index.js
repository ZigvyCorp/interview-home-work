const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./routers/posts');
const usersRouter = require('./routers/users');
const commentsRouter = require('./routers/comments');
const URI_DB = 'mongodb+srv://devqb:GiacHanh010198@cluster0.c6sbe.mongodb.net/Blog?retryWrites=true&w=majority'


const app = express();
const PORT =process.env.PORT || 5000;

app.use(bodyParser.json({limit:'30mb'}));
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}));
app.use(cors());



//ROUTE
app.use('/posts',postsRouter);
app.use('/users',usersRouter);
app.use('/comments',commentsRouter);


//CONNECT DB
mongoose.connect(URI_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(()=>{
    app.listen(PORT,()=>{
    console.log('server running...');
})
})
.catch(err=>{
  console.log('err'.err);
});
