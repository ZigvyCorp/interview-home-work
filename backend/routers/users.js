const userCtr = require('../controllers/users');

module.exports = app => {
    app.route('/users/add').post(userCtr.addUser);
    app.route('/users').get(userCtr.getUsers);
    app.route('/users/:id').get(userCtr.getUser);
	app.route('/users/:id').put(userCtr.updateUser);
};
