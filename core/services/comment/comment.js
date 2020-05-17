var HomePageModel = require('../../models/homepage');
var uuid = require('uuid');

class CommentService {
    constructor() {
        this.BaseModel = HomePageModel.Comment;
    }

    addNewComment(reqObj) {
        return new Promise((resolve, reject) => {
            const {
                ownerId,
                postId,
                content,
            } = reqObj
            this.BaseModel.create({
                id: uuid.v1(),
                ownerId,
                postId,
                content,
            }).then((result) => {
                resolve(result);
            }).catch(e => reject(e));
        });
    }

    updateComment(reqObj) {
        return new Promise((resolve, reject) => {
            const {
                idUpdate,
                content,
            } = reqObj;
            this.BaseModel.update({
                id: idUpdate,
            }, {
                content,
            }).then((result) => {
                resolve(result);
            }).catch(e => reject(e));
        });
    }

    deleteComment(id) {
        return new Promise((resolve, reject) => {
            this.BaseModel.deleteOne({
                id,
            }).then((result) => {
                resolve(result);
            }).catch(e => reject(e));
        });
    }
}

module.exports = CommentService;