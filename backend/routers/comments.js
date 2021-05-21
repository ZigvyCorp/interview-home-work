const commentCtrl = require('../controllers/comments');

module.exports = app => {
	app.route('/comments/add').post(commentCtrl.addComment);
	app.route('/comments').get(commentCtrl.getComments);
	app.route('/comments/:id').get(commentCtrl.getComment);
	app.route('/comments/:id').put(commentCtrl.updateComment);
}