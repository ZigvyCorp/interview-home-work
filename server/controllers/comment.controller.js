import Comment from '../models/comment';

import sanitizeHtml from 'sanitize-html';

/**
 * Get all comment
 * @param req
 * @param res
 * @returns void
 */

export function getComments(req, res) {
  Comment.find().sort('-created_at').populate('owner').exec((err, comments) => {
    if(err){
      res.status(400).send({
        success: false,
        data: null,
        message: err
      });
    }
    res.send({ success: true , data: comments });
  });
}

export function addComment(req, res) {
  if (!req.body.comment.content || !req.body.comment.owner) {
    res.status(403).end();
  }
  req.body.comment.post =  req.params._id;
  const newComment = new Comment(req.body.comment);

  // Let's sanitize inputs
  newComment.post = sanitizeHtml(newComment.post);
  newComment.owner = sanitizeHtml(newComment.owner);
  newComment.content = sanitizeHtml(newComment.content);

  newComment.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send({ success: true , data: saved });
  });
}


