import User from '../models/user';

import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
  User.find().exec((err, users) => {
    if(err){
      res.status(400).send({
        success: false,
        data: null,
        message: err
      });
    }
    
    res.send({ success: true , data:users });
  });
}


