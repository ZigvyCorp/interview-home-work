import { Router } from "express";
import PostController from "../controllers/post-controller";
import AuthenMiddleware from "../middlewares/authen-middleware";

const router= Router();

router.use(AuthenMiddleware.authenMiddleware);

router.get('/', PostController.getAllPost); 
router.post('/',PostController.createPost);
router.get('/:post_id', PostController.getPostByPostId); 
router.put('/:post_id', PostController.updatePost);
router.delete('/:post_id', PostController.deletePost);
router.get('/page/:page', PostController.getAllPostByPage);  



export default router;