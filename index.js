const express = require("express");
const bodyParser= require("body-parser");
const router= express.Router();
const expressLayouts= require('express-ejs-layouts');
const cookieSession = require('cookie-session');
const authMiddleware = require('./middlewares/auth');
const blogRouter= require('./routers/blog');
const userRouter= require('./routers/user');
const emailRouter= require('./routers/register');
const authRouter= require('./routers/auth');
const cmtRouter= require('./routers/comment');
const Blog = require('./models/blog');
const app = express();

const db = require('./models/db');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views","./views");

var path = require('path');
// const { session } = require('passport');
app.use(express.static(path.join(__dirname, 'public')));
// Session
 
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))
   
 app.use(authMiddleware);
// Session
app.use('/auth', emailRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/blog',blogRouter);
app.use('/conments',cmtRouter);

app.get('/', async function(req,res){
  const todos= await Blog.findAllBlogs();
  console.log(todos);
  res.render('homepage/index',{todos});
});
app.post('/', async function(req,res){
  const todos= await Blog.searchblog(req.body.textsearch);
  console.log(todos);
  res.render('homepage/index',{todos});
})
db.sync().then(function(){
  app.listen(process.env.PORT || 3000);

}).catch(console.error);
