var mongoose = require('mongoose');
var Helper = require('../common/Helper');
var CryptoJS = require("crypto-js");
var config = require('../../private/config');

var schema = new mongoose.Schema({
    id: {
        type: Number,
        default: Helper.generateRandomID(),
        required: true
    },
    username: {
        type: String,
        default: '',
        required: true
    },
    name: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    dob: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Number,
        default: 0
    }
});

schema.methods.hashPassword = function (password) {
    try {
        if (password) {
            var hashPassword = CryptoJS.AES.encrypt(password, config.secretKeyLv1).toString();
            var userPrivateInfo = {password: hashPassword, username: this.username}
            var finalPassword = CryptoJS.AES.encrypt(JSON.stringify(userPrivateInfo), config.secretKeyLv2)
            return finalPassword;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

schema.methods.authencation = function (password) {
    try {
        var bytes = CryptoJS.AES.decrypt(this.password, config.secretKeyLv2);
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        var userPrivateInfo = JSON.parse(plaintext);
        if (this.username === userPrivateInfo.username) {
            var hashPassword = userPrivateInfo.password;
            bytes = CryptoJS.AES.decrypt(hashPassword, config.secretKeyLv1).toString();
            var decryptPassword = bytes.toString(crypto.enc.Utf8);
            return decryptPassword === password;
        }
        return false
    } catch (error) {
        console.log(error);
        return false;
    }
}

var User = mongoose.model('User', schema);

module.exports = User;