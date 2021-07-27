var express = require('express');
var router = express.Router();
const POST_SERVICE = require('../services/post.service').SERVICE;
const USER_SERVICE = require('../services/user.service').SERVICE;
const COMMENT_SERVICE = require('../services/comment.service').SERVICE;
/* GET home page. */

router.get('/', async(req, res, next)=> {
 let filter = req.query
 Object.keys(filter).forEach(key => { if (!filter[key]) { delete filter[key] } })

 if (filter.Search) {
  filter['$text'] = { '$search': `"${filter.Search}"` }
  delete filter.Search
}

  let posts = await POST_SERVICE.getListWithComment(filter);
  console.log(posts.data[0].comments[0].owner)
  if(posts && !posts.error)
    return res.render('index', { title: 'Express',  posts: posts.data });
});

///get the post creation page
router.get('/post', async(req, res, next)=>{
  let owners = await USER_SERVICE.getList();
  let posts = await POST_SERVICE.getListWithComment();
  res.render('newArticle', {owners: owners.data, posts: posts.data });
})

///get the post creation user
router.get('/user', async(req, res, next)=>{
  let users = await USER_SERVICE.getList();
  res.render('newUser',{users: users.data});
})


///create post
router.post('/post', async(req, res, next)=> {
  let input = req.body;
 // console.log(input)
  let post = await POST_SERVICE.insert(input);
  console.log(post)
  res.redirect('/post')
});

///create user
router.post('/user', async(req, res, next)=> {
  let input = req.body;
  //console.log(input)
  let user = await USER_SERVICE.insert(input);
  res.redirect('/user')
});

///create comment
router.post('/comment', async(req, res, next)=> {
  let {input} = req.body;
  let comment = await COMMENT_SERVICE.insert(input);
  res.json(comment)
});

module.exports = router;
