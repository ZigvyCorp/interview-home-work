const Router = require('express').Router();
const postCtrl = require('../controller/post.ctrl');

//====Router Post====//
// GET  => /api/post
Router.get('/', postCtrl.getAll);
// GET  => /api/post/postId/userId
Router.get('/:postId/:userId', postCtrl.getPost);
// POST => /api/post
Router.post('/', postCtrl.addPost);
// PUT => /api/post/update
Router.put('/update', postCtrl.update);
// DELETE => /api/post
Router.delete('/', postCtrl.delete);

//==== End Router Post===//

//=== Router Comment === //
// POST => /api/post/comment
Router.post('/comment', postCtrl.addComment);
// DELETE => /api/post/comment
Router.delete('/comment', postCtrl.deleteComment);
// PUT => /api/post/comment/update
Router.put('/comment/update', postCtrl.updateComment);
//=== End Router Comment ===//

module.exports = Router;