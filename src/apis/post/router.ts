import { Router } from 'express';
import { auth } from '../../shared/jwt';
import Controller from './controller';

const router = Router();

router.post('/create-post', auth, Controller.createPost);
router.get('', Controller.getPage);
router.get('/search-by-tag', Controller.searchByTag);
router.get('/search-by-title', Controller.searchByTitle);
router.put('/update-post', auth, Controller.updatePost);
router.delete('/delete-post', auth, Controller.deletePost);

export default router;