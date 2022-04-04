const express = require('express');
const data = require('../data/posts.json')

const router = express.Router();

router.get('/',(req,res) => {
  if(req.query.userId !== undefined){ 
    /* if user specify a user ID, return all belonging posts */
    const posts = data.filter((post)=>{
      if(post.owner == req.query.userId) 
      return post;
    })
    res.json(posts);
  }
  else{
    res.json(data)
  }
});
router.get('/:postId',(req,res) => {
  res.json(data[req.params.postId-1]);
});

module.exports = router