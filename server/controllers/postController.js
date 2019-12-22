var Post = require('../models/Post');
var User = require('../models/User');
var responseStatus = require('../common/responseStatus');
var MessageSupplier = require('../common/MessageSupplier');
var constant = require('../common/constant');

async function createNewPost (data, id) {
    if (parseInt(data.owner, 10) !== id) throw responseStatus.code500({message: MessageSupplier.AN_ERROR_OCCURRED});
    else {
        data.tags = data.tags.split(',');
        data.owner = parseInt(data.owner, 10);
        var post = new Post(data);
        await post.save();
        return responseStatus.code200({message: MessageSupplier.CREATE_POST_SUCCESS, post: post})
    }
}

async function getListPost (search) {
    var posts
    if (search) {
        var posts = await Post.find({$or: [{title: {$regex : '.*' + search + '.*'}}, {tags: {$in: [search]}}]}).sort({createdAt: -1})
    } else {
        var posts = await Post.find({}).sort({createdAt: -1})
    }
    posts = JSON.parse(JSON.stringify(posts))
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var user = await User.findOne({id: post.owner}, {password: 0})
        if (user) post.user = user;
    }
    return responseStatus.code200({posts: posts})
}

module.exports = {
    createNewPost: createNewPost,
    getListPost: getListPost
}