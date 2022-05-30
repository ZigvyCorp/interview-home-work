const express = require('express');
const router = express.Router();
const postsController = require('../app/controllers/PostsController');
 

router.get('/create', postsController.create);
router.post('/store', postsController.store);
router.get('/:id/edit', postsController.edit);
router.post('/handle-form-actions', postsController.handleFormActions);
router.put('/:id', postsController.update);
router.patch('/:id/restore', postsController.restore);
router.delete('/:id/destroy', postsController.destroy);
router.delete('/:id', postsController.softDelete);
router.get('/:slug', postsController.show);

module.exports = router;
