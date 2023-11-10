import Post from "../models/postModel.js";

//@desc     Fetch all posts
//@route    GET /api/posts
const getPosts = async (req, res) => {
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.q
        ? {
              name: {
                  $regex: req.query.q,
                  $options: "i",
              },
          }
        : {};

    const count = await Post.countDocuments({ ...keyword });
    const posts = await Post.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1));
    res.json({ posts, page, pages: Math.ceil(count - pageSize) });
};

//@desc     Fetch products by tag
//@route    GET /api/posts/tag/:tag
const getPostsByTag = async (req, res) => {
    const tag = req.query.tag
        ? {
              tag: {
                  $regex: req.query.tag,
                  $options: "i",
              },
          }
        : {};
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;

    const count = await Post.countDocuments({ ...tag });
    const posts = await Post.find({ ...tag })
        .limit(pageSize)
        .skip(pageSize * (page - 1));
    res.json({ posts, page, pages: Math.ceil(count - pageSize) });
};

//@desc     Fetch single post
//@route    GET /api/posts/:id
const getPostByID = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
};

//@desc     Delete a post
//@route    DELETE /api/posts/:id
const deletePostByID = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
        await post.remove();
        res.json({ message: "Post deleted" });
    } else {
        res.status(404).json({ message: "Post not found" });
    }
};

//@desc     Create a post
//@route    POST /api/posts/
const createPost = async (req, res) => {
    const post = new Post({
        id: Date.now(),
        owner: 0,
        title: "Sample Title",
        content: "Lorem ipsum",
        created_at: Date.now(),
    });

    const createdPost = await Post.save();
    res.status(201).json(createdPost);
};

//@desc     Update a post
//@route    PUT /api/posts/
const updatePost = async (req, res) => {
    const { title, content } = req.body;

    const post = await Post.findById(req.params.id);

    if (post) {
        post.title = title;
        post.content = content;
    } else {
        res.status(404);
        throw new Error("Product not found");
    }

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
};

export {
    getPosts,
    getPostByID,
    getPostsByTag,
    deletePostByID,
    updatePost,
    createPost,
};
