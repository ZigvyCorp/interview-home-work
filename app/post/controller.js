const PostModel = require('./model');
const UserModel = require('../user/model');
const utility = require('../../helper/utility');

module.exports = {
  getDetail: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.error('missing require fields!!');
      }
      const post = await PostModel.findById(id);
      if (!post || !post._id) {
        return res.error('missing require fields!!');
      }
      return res.success(post);
    } catch (e) {
      console.log('catch ERR: ', e);
      return res.error(e, 500);
    }
  },
  getList: async (req, res) => {
    try {
      const { query } = req;
      const userId = utility.stringValidate(query.userId);
      let paginationOptions = utility.buildOptionByQuery(query);

      if (!userId) {
        return res.error('missing require fields!!');
      }
      let params = { userId };

      let option = {
        populate: { path: 'userId', select: '_id name' },
        sort: { createdAt: -1 },
        ...paginationOptions,
      };

      const [post, count] = await Promise.all([
        PostModel.find(params)
          .sort(option.sort)
          .skip(option.skip)
          .limit(option.limit)
          .populate(option.populate),
        PostModel.count(params)]);

      return res.success({total: count, page: paginationOptions.page, pages: utility.getTotalPage(count, paginationOptions.limit), post });
    } catch (e) {
      console.log('catch ERR: ', e);
      return res.error(e, 500);
    }
  },
  create: async (req, res) => {
    try {
      const { body } = req;
      let data = {
        title: utility.stringValidate(body.title),
        content: utility.stringValidate(body.content),
        tags: utility.arrayValidate(body.tags),
        images: utility.arrayValidate(body.images),
        userId: utility.stringValidate(body.userId),
      };

      if (!data || !data.userId || !data.title) {
        return res.error('missing require fields!!');
      }

      const user = await UserModel.findById(data.userId);

      if (!user || !user._id) {
        return res.error(`User don't exits!!`);
      }

      const post = await PostModel.create(data);

      return res.success(post);
    } catch (e) {
      console.log('catch ERR: ', e);
      return res.error(e, 500);
    }
  },
  update: async (req, res) => {
    try {
      const { body } = req;
      const postId = req.params.id;
      let data = {
        title: utility.stringValidate(body.title),
        content: utility.stringValidate(body.content),
        tags: utility.arrayValidate(body.tags),
        images: utility.arrayValidate(body.images),
      };

      if (!postId || !data || !data.title) {
        return res.error('missing require fields!!');
      }

      let post = await PostModel.findById(postId);

      if (!post || !post._id) {
        return res.error(`Post don't exits!!`);
      }
      post.title = data.title;
      post.content = data.content;
      post.tags = data.tags;
      post.images = data.images;

      await post.save();

      return res.success(post);
    } catch (e) {
      console.log('catch ERR: ', e);
      return res.error(e, 500);
    }
  },

};
