const express = require('express');
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
var expressValidator = require('express-validator');
const expressSession = require('express-session');
const authMiddleware = require('./middlewares/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middlewares/redirectIfAuthenticatedMiddleware');

const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const validateMiddleware = require("./middlewares/validateMiddleware");
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');

mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use(expressSession({
    secret: 'HelloZigvy'
}))
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator())
app.use('/posts/store', validateMiddleware.CreatePostValidator);


app.listen(3000, () => {
    console.log('App listening on port 3000')
})

global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});

app.get('/posts/new', authMiddleware, newPostController);
app.get('/', homeController);
app.get('/post/:id', getPostController);
app.post('/posts/store', authMiddleware, storePostController);
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController);
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);
app.get('/auth/logout', logoutController);
app.use((req, res) => res.render('notfound'));