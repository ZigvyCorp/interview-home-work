const postCtr = require('../controllers/posts');

module.exports = app => {
    app.route('/posts/add').post(postCtr.addPost);
    app.route('/posts').get(postCtr.getPosts);
    app.route('/posts/:id').get(postCtr.getPost);
	app.route('/posts/:id').put(postCtr.updatePost);
};
