import Post from '../Models/PostModal.js';
import Comment from '../Models/commentModal.js';
import User from '../Models/UserModal.js';

// const getListPosts = async (req, res) => {
//     const { pageNumber, pageSize } = req.body;
//     const post = await Post.find({}).populate('owner', 'name dob created_at');
//     const comment = await Comment.find({ post: post._id }).populate(['owner', 'post']);
//     try {
//         if (post) {
//             res.json({
//                 success: true,
//                 message: '',
//                 data: post,
//             });
//         } else {
//             res.json({
//                 success: false,
//                 message: 'fail',
//             });
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };
const getListPosts = async (req, res) => {
    const { pageNumber, pageSize } = req.body;
    console.log('pageNumber = ', pageNumber, 'pageSize = ', pageSize);
    const skip = (pageNumber - 1) * pageSize;
    try {
        const totalPosts = await Post.countDocuments();
        const totalPages = Math.ceil(totalPosts / pageSize);

        const posts = await Post.find({}).populate('owner', 'name dob created_at').skip(skip).limit(pageSize);

        if (posts) {
            res.json({
                success: true,
                message: '',
                Pagination: {
                    currentPage: pageNumber,
                    pageSize: pageSize,
                    totalPage: totalPages,
                },
                data: posts,
            });
        } else {
            res.json({
                success: false,
                message: 'fail',
            });
        }
    } catch (error) {
        console.log(error);
    }
};
const getCommentInPost = async (req, res) => {
    const { _id } = req.body;
    const comments = await Comment.find({ post: _id }).populate('owner', 'name dob created_at');
    console.log('_id = ', _id);
    console.log('comments = ', comments);

    res.json(comments);
};
const searchPost = async (req, res) => {
    const { title, pageNumber, pageSize } = req.body;
    const skip = (pageNumber - 1) * pageSize;

    try {
        const query = {
            title: { $regex: title, $options: 'i' },
        };

        const totalPosts = await Post.countDocuments(query);
        const totalPages = Math.ceil(totalPosts / pageSize);

        const posts = await Post.find(query).populate('owner', 'name dob created_at').skip(skip).limit(pageSize);

        if (posts) {
            res.json({
                success: true,
                message: '',
                currentPage: pageNumber,
                pageSize: pageSize,
                totalPage: totalPages,
                data: posts,
            });
        } else {
            res.json({
                success: false,
                message: 'fail',
            });
        }
    } catch (error) {
        console.log(error);
    }
};
const postController = {
    getListPosts,
    getCommentInPost,
    searchPost,
};
export default postController;
