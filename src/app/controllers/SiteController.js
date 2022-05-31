const Posts = require('../models/Posts');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class SiteController {
    //[GET] /
    home(req, res,next) {
        Posts.find({})
            .then(posts => {
                res.render('home',{
                    // vấn đề của template handlebars
                    posts: mutipleMongooseToObject(posts)
                });
            })
            .catch(next)
    }
}
module.exports = new SiteController();