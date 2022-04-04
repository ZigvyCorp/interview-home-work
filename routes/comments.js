const express = require('express');
const data = require('../data/comments.json')

const router = express.Router();


router.get('/',(req,res) => { 
  if( req.query.postId !== undefined ){ //if postId is provided, ignore rest of query string
    /* find comments based on posts */
    const comments = data.filter(comment=> { 
      if(comment.post == req.query.postId)
      return comment;
    });
    res.json(comments);
  } else if (req.query.userId !== undefined){
    /* find comments based on userId */
    const comments = data.filter(comment=> {
      if(comment.owner == req.query.userId)
      return comment
    });
    res.json(comments);
  } else {
    res.json(comments);
  }
})

module.exports = router