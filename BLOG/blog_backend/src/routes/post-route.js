const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');

router.route('/create-post').post(postController.create);
router.route('/read-posts').get(postController.findAll);
router.route('/read-post/:posId').get(postController.findById);
router.route('/update-post/:posId').put(postController.updateById);
router.route('/delete-post/:posId').patch(postController.deleteById);

module.exports = router;
