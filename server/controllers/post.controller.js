import Post from '../models/post';
import Comment from '../models/comment';

import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export async function getPosts(req, res) {
  const page = req.query.page - 1;

  try{
    const posts =  await Post.find().populate('owner').limit(5).skip(5 * page).sort({ dateAdded: -1 , _id: -1}).exec();
    const total = await Post.find();
    res.send({ success: true , data: posts, total: total.length});
  } catch(err) {
    res.status(400).send({
      success: false,
      data: null,
      message: err
    });
  }
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.owner || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.owner = sanitizeHtml(newPost.owner);
  newPost.content = sanitizeHtml(newPost.content);
  newPost.searchTitle = sanitizeHtml(newPost.title).toLowerCase()
  newPost.populate('owner').save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send({ success: true , data: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPostDetail(req, res) {
  Post.findOne({ _id: req.params._id }).exec((err, post) => {
    if(err){
      res.status(400).send({
        success: false,
        data: null,
        message: err
      });
    }
    
    res.send({ success: true , data: post });
    
  });
}



export function search(req,res) {
  const titleSearch = req.query.title
   Post.find({searchTitle: {$regex: new RegExp(titleSearch)} }).limit(5).exec((err, post) => {
      if(err){
        res.status(400).send({
          success: false,
          data: null,
          message: err,
        });
      }

      res.send({ success: true , data: post });
    });
      // res.send({ success: true , data: null });
}