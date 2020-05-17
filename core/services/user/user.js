var  HomePageModel = require('../../models/homepage');
var uuid = require('uuid');
var _ = require('lodash');

class UserService {
    constructor() {
        this.BaseModel = HomePageModel.User;
    }

    createNewUser(reqObj) {
        return new Promise((resolve, reject) => {
            const {
                username,
                password,
                name,
                dob
            } = reqObj;
            this.BaseModel.create({
                id: uuid.v1(),
                username,
                password,
                name,
                dob,
            }).then((result) => {
                resolve(result);
            }).catch(e => reject(e));
        });
    }

    login(reqObj) {
        return new Promise((resolve, reject) => {
            const {
                username,
                password,
            } = reqObj;
            this.BaseModel.find({
                username,
                password,
            }).then((result) => {
                if(!_.isEmpty(result)) {
                    resolve(result[0]);
                } else {
                    resolve({});
                }
            }).catch(e => reject(e));
        });
    }

    getUserDetail(id) {
        return new Promise((resolve, reject) => {
            this.BaseModel.find({
                id,
            }).then((result) => {
                if(!_.isEmpty(result)) {
                    resolve(result[0]);
                } else {
                    resolve({});
                }
            }).catch(e => reject(e));
        });
    }

    updateUser(reqObj) {
        return new Promise((resolve, reject) => {
            const {
                idUpdate,
                username,
                password,
                name,
                dob,
            } = reqObj;
            this.BaseModel.update({
                id: idUpdate,
            }, {
                $set: {
                    username,
                    password,
                    name,
                    dob,
                },
            }).then((result) => {
                if(!_.isEmpty(result)) {
                    resolve(result[0]);
                } else {
                    resolve({});
                }
            }).catch(e => reject(e));
        });
    }
}

module.exports = UserService;