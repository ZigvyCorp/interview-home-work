import express from "express"
import controller from "../controllers/comment"
import { verifyToken, isAdmin } from "../middlewares/verifyToken"
const router = express.Router()


// router.get('/', controller.getAllBlogs)
// router.get('/current-blog/:id', controller.getCurrentBlog)

router.use(verifyToken)
router.post('/', controller.createComment)
// router.delete('/:id', controller.deleteBlog)
// router.put('/:id', upload.single("image"), controller.updateBlog)
// router.put('/upload-image/:id', isAdmin, controller.uploadImageBlog)

module.exports = router
