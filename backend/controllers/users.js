const User = require('../models/users');

exports.addUser = async (req, res) => {
    const user = new User(req.body);
    user.save((err, data) => {
        err ? res.status(500).send('Fail') : res.status(200).send(data);
    });
};
exports.updateUser = async (req, res) => {
    User.updateOne({ _id: req.params.id }, { $set: req.body }, (err, data) => {
        err ? res.status(500).send('Fail') : res.status(200).send('Success');
    });
};

exports.getUsers = async (req, res) => {
    User.find({}, (err, users) => {
        err ? res.status(404).send('Fail') : res.status(200).send(users);
    });
};

exports.getUser = async (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        err ? res.status(404).send('Fail') : res.status(200).send(user);
    });
};
