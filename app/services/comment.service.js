const COMMENT_COLL = require('../models/comment.model');

class SERVICE{
    
    insert(data){
        return new Promise(async resolve =>{
            try{
                let comment = await new COMMENT_COLL(data).save();
                if(comment)
                  return resolve({error: false, message: 'successfully added comment!'});
                return resolve({error: true, message: 'Cannot add comment!'});
            }catch(err){
                return resolve({error: true, message: 'An error has occurred!'});
            }
        })
    }

    getById(id){
        return new Promise(async resolve=>{
            try{
                let comment = await COMMENT_COLL.findOne({_id: id}).lean();
                if(comment)
                  return resolve({error: false, data: comment});
                return resolve({error: true, message: 'Cannot get comment!'});
            }catch(err){
                return resolve({error: true, message: 'An error has occurred!'});
            }
        })
    }

    getList(){
        return new Promise(async resolve=>{
            try{
                let comments = await COMMENT_COLL.find()
                    .populate({
                        path: 'owner',
                        select: 'username name'
                    }).lean();
                if(comments)
                  return resolve({error: false, data: comments});
                return resolve({error: true, message: 'Cannot get list!'});
            }catch(err){
                return resolve({error: true, message: 'An error has occurred!'});
            }
        })
    }

    getListByPostId(postId){
        return new Promise(async resolve=>{
            try{
                let comments = await COMMENT_COLL.find({post: postId})
                    .populate({
                        path: 'owner',
                        select: 'username name'
                    }).lean();
                if(comments)
                  return resolve({error: false, data: comments});
                return resolve({error: true, message: 'Cannot get list!'});
            }catch(err){
                return resolve({error: true, message: 'An error has occurred!'});
            }
        })
    }
}

exports.SERVICE = new SERVICE;