let Post = require("../../models/PostSchema");

// get all posts
exports.getAllPosts = async (req, res) => {
    let limit = Number(req.query.limit);
    let page = Number(req.query.page);

    if (page < 0) {
        res.json({ message: "Page not correct. Must be > 0" });
    }

    //page 1=> skip = (1 - 1)*5, limit=5
    //page 2=> skip = (2 - 1)*5, limit=5
    //page n => skip = (n - 1)*limit limit=5

    await Post.find({}).limit(limit).skip((page - 1) * limit).exec((err, posts) => {
        if (err) throw err;
        if (posts.length > 0) {
            var jsonResponse = { posts: posts };
            res.json(jsonResponse);
        } else {
            res.json({ message: "Post not exist in database", });
        }
    });
};

// get post by id for search
exports.getPostById = async (req, res) => {
    let post_id = req.params.id;
    let post_find_by_id = await Post.findById(post_id);

    if (post_find_by_id !== null) {
        res.json({ message: `Found post with Id ${post_id} success.`, data: post_find_by_id });
    } else {
        res.json({ message: `Not found post with Id ${post_id}` });
    }
};

//add new post
exports.addNewPost = (req, res) => {
    let new_post = new Post(req.body);
    new_post.save((err, new_post_data) => {
        if (err) {
            res.json({ message: "Error to save", error: err });
            return;
        }
        res.json({ message: "Save ok", data: new_post_data });
    });
};

//update post
exports.updatePost = async (req, res) => {
    try {
        let update_post_id = req.params.id;
        let content_post_update = req.body;
        let content_current_post = await Post.findById(update_post_id);

        if (content_current_post === null) {
            res.json({ message: "Post is not exist." });
        }

        content_current_post.title = content_post_update.title
            ? content_post_update.title
            : content_current_post.title;

        content_current_post.content = content_post_update.content
            ? content_post_update.content
            : content_current_post.content;

        content_current_post.save((err, content_updated_post) => {
            if (err) {
                res.json({ message: "Error to update post.", error: err });
            } else {
                res.json({ message: "Update post success.", data: content_updated_post });
            }
        });
    } catch (err) {
        throw err;
    }
}
//delete post
exports.deletePost = async (req, res) => {
    let delete_post_id = req.params.id;

    let post_deleted = await Post.findById(delete_post_id);
    if (post_deleted !== null) {
        Post.deleteOne({ _id: delete_post_id }, (err) => {
            if (err) {
                res.json({ message: "Error to delete Post,", error: err });
            } else {
                res.json({ message: "Delete Post success." });
            }
        });
    } else {
        res.json({ message: "Post not exist, can\'t delete." });
    }
};
