const api = require('../services/apiService');


// Get All Posts
const getPost = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, order = 'create_at DESC', search } = req.query;
        console.log(search);
        const data = await api.getPosts({ page, limit, order }, search);

        if (data.length > 0) {
            return res.status(200).json({
                returnCode: 1,
                status: "success",
                content: "Danh sách tất cả bài viết",
                data: data
            });
        } else {
            return res.status(404).json({
                returnCode: 0,
                status: "not found",
                content: "Không tìm thấy bài viết nào"
            });
        }
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi trong quá trình xử lý '
        });
    }
};



// Get Comments off Post
const getComment = async (req, res, next) => {
    try {

        const { page = 1, limit = 10, order = 'create_at DESC' } = req.query;
        const id = req.params.id;
        console.log(id)
        const data = await api.getComments({ page, limit, order, id });

        if (data.length > 0) {
            return res.status(200).json({
                returnCode: 1,
                status: "success",
                content: "Danh sách tất cả bình luận",
                data: data
            });
        } else {
            return res.status(404).json({
                returnCode: 0,
                status: "not found",
                content: "Không tìm thấy bình luận"
            });
        }
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
        return res.status(500).json({
            success: false,
            message: 'Đã xảy ra lỗi trong quá trình xử lý '
        });
    }
};

module.exports = { getPost, getComment };