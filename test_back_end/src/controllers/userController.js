const mongoose = require('mongoose');
const userModel = require('../models/user');

exports.getAllUser = (req,res) => {
    userModel
    .find()
    .then(listUsers => {
        return res.status(200).json({
            success: true,
            message: 'List of users',
            results: listUsers
        });
    })
    .catch(error => {
        return res.status(500).json({
            success: false,
            message: 'Could not get list of users',
            results: error.message
        })
    })
}