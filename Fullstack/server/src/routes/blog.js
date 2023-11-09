import express from "express"
import { upload } from "../config/configUploadFile"
import controller from "../controllers/blog"
import { verifyToken, isAdmin } from "../middlewares/verifyToken"
const router = express.Router()


router.get('/', controller.getAllBlogs)
router.get('/current-blog/:id', controller.getCurrentBlog)

router.use(verifyToken)
router.post('/', upload.single("image"), controller.createBlog)
router.put('/comment/:id', controller.commentBlog)
router.delete('/:id', controller.deleteBlog)
router.put('/:id', upload.single("image"), controller.updateBlog)
router.put('/upload-image/:id', isAdmin, controller.uploadImageBlog)

module.exports = router
