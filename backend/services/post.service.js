const httpStatus = require("http-status");
const axiosClient = require("../utils/axiosClient");
const getTags = require("../utils/getTags");
const paginate = require("../utils/paginate");
const getFakeDate = require("../utils/getFakeDate");
const APIError = require("../utils/APIError");

class PostService {
    getPosts = async (reqQuery) => {
        let { page, limit, keyword } = reqQuery;

        const url = '/posts';
        let posts = await axiosClient.get(url);

        page = parseInt(page) || 1;
        limit = parseInt(limit) || 10;

        if (keyword) {
            posts = posts.filter(post => post.title.toLowerCase().includes(keyword.toLowerCase()));
        }

        const totalItems = posts.length;
        const totalPages = Math.ceil(posts.length / limit);

        posts = paginate(posts, page, limit);

        posts = posts.map((post) => {
            return {
                id: post.id,
                owner: post.userId,
                title: post.title,
                content: post.body,
                created_at: getFakeDate(new Date('2000/01/01'), new Date()),
                tags: getTags(3)
            };
        });

        return {
            page,
            limit,
            totalPages,
            totalItems,
            posts
        };
    };

    getPost = async (reqParams) => {
        const url = '/posts';
        let post = await axiosClient.get(`${url}/${reqParams}`);

        if (!post) {
            throw new APIError(httpStatus.NOT_FOUND, "Post not found!");
        }

        post = {
            id: post.id,
            owner: post.userId,
            title: post.title,
            content: post.body,
            created_at: getFakeDate(new Date('2000/01/01'), new Date()),
            tags: getTags(3)
        };
        return post;
    };
}

module.exports = new PostService();