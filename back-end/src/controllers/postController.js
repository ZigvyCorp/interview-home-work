const cloudinary = require('../utils/cloudinary');
const Post = require('../models/postModel');
const ErrorResponse = require('../utils/errorResponse');

exports.createPost = async (req, res, next) => {
  const { title, content, postedBy, image, likes, comments } = req.body;

  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: 'posts',
      width: 1200,
      crop: 'scale',
    });
    const post = await Post.create({
      title,
      content,
      postedBy: req.user._id,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.showPost = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate('postedBy', 'name');
    res.status(201).json({
      success: true,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

exports.showSinglePost = async (req, res, next) => {
  const idPost = req.params.id;
  try {
    const post = await Post.findById(idPost).populate('comments.postedBy', 'name');
    res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  const idPost = req.params.id;
  const currentPost = await Post.findById(idPost);
  const imgId = currentPost.image.public_id;

  if (imgId) await cloudinary.uploader.destroy(imgId);

  try {
    const post = await Post.findByIdAndRemove(idPost);
    res.status(201).json({
      success: true,
      message: 'post deleted',
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const idPost = req.params.id;
    const { title, content, image } = req.body;
    const currentPost = await Post.findById(idPost);

    const data = {
      title: title || currentPost.title,
      content: content || currentPost.content,
      image: image || currentPost.image,
    };

    if (req.body.image !== '') {
      const ImgId = currentPost.image.public_id;
      if (ImgId) {
        await cloudinary.uploader.destroy(ImgId);
      }

      const newImage = await cloudinary.uploader.upload(req.body.image, {
        folder: 'posts',
        width: 1200,
        crop: 'scale',
      });

      data.image = {
        public_id: newImage.public_id,
        url: newImage.secure_url,
      };
    }

    const postUpdate = await Post.findByIdAndUpdate(req.params.id, data, { new: true });

    res.status(200).json({
      success: true,
      postUpdate,
    });
  } catch (error) {
    next(error);
  }
};

exports.addComment = async (req, res, next) => {
  const { comment } = req.body;
  const idPost = req.params.id;
  try {
    const post = await Post.findByIdAndUpdate(
      idPost,
      {
        $push: { comments: { text: comment, postedBy: req.user._id } },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};

exports.addlike = async (req, res, next) => {
  const idPost = req.params.id;
  try {
    const post = await Post.findByIdAndUpdate(
      idPost,
      {
        $addToSet: { likes: req.user._id },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};

exports.removeLike = async (req, res, next) => {
  const idPost = req.params.id;
  try {
    const post = await Post.findByIdAndUpdate(
      idPost,
      {
        $pull: { likes: req.user._id },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    next(error);
  }
};
