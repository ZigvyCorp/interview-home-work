const routes = require('express').Router();
const bodyParser = require('body-parser');

const user = require('./user');
const post = require('./post');
const comment = require('./comment');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const wrapperRes = controller => async (req, res) => {
  const results = await controller(req, res);
  if (!results)
    return res.status(200).json({
      success: false,
      data: null,
    });
  return res.status(200).json({ success: true, data: results });
};
// User
routes.post('/users/login', jsonParser, wrapperRes(user.login));
routes.post('/users/signup', jsonParser, wrapperRes(user.signup));
routes.get('/users/me', wrapperRes(user.me));
//
routes.get('/users', wrapperRes(user.getList));
routes.get('/users/:id', wrapperRes(user.get));
routes.post('/users', jsonParser, wrapperRes(user.insert));
routes.put('/users/:id', wrapperRes(user.update));
routes.delete('/users/:id', wrapperRes(user.delete));

// Post
routes.get('/posts', wrapperRes(post.getList));
routes.get('/posts/:id', wrapperRes(post.get));
routes.post('/posts/:id', wrapperRes(post.insert));
routes.put('/posts/:id', wrapperRes(post.update));
routes.delete('/posts/:id', wrapperRes(post.delete));

// Comment
routes.get('/comments', wrapperRes(comment.getList));
routes.get('/comments/:id', wrapperRes(comment.get));
routes.post('/comments/:id', wrapperRes(comment.insert));
routes.put('/comments/:id', wrapperRes(comment.update));
routes.delete('/comments/:id', wrapperRes(comment.delete));

module.exports = routes;
