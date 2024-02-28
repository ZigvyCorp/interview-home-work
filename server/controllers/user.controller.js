import User from "../models/user.model.js";
import Post from "../models/post.model.js";

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserByPostId = async (req, res) => {
    try {
        const { postId } = req.params;

        const post = await Post.findById(postId).populate("userRef");
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        return res.status(200).json(post.userRef);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createUser = async (req, res) => {
    const { username, email } = req.body;

    const newUser = new User({ username, email });

    try {
        await newUser.save();
        res.status(201).json("User created successfully!");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
