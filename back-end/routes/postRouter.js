const router = require('express').Router();

const postCtrl = require('../controllers/postCtrl');
router.route('/posts').post(postCtrl.createPost);
router.route('/posts').get(postCtrl.getAllPosts);
router.route('/posts').put(postCtrl.updatePost);
router.route('/posts/addComment').patch(postCtrl.addCommentToPost);

router
  .route('/posts/:id')
  .delete(postCtrl.deletePost)
  .get(postCtrl.getDetailID);

module.exports = router;
