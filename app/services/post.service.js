const POST_COLL = require('../models/post.model');
const COMMENT_COLL = require('../models/comment.model');

class SERVICE{
    insert(data){
        return new Promise(async resolve =>{
            try{
                if(data.tags){
                  data.tags = data.tags.split(",")
                }
                let post = await new POST_COLL(data).save();
                if(post)
                  return resolve({error: false, message: 'successfully added article!'});
                return resolve({error: true, message: 'Please fill out this form!'});
            }catch(err){
                console.log(err)
                return resolve({error: true, message: 'An error has occurred!'});
            }
        })
    }

    getById(id){
        return new Promise(async resolve=>{
            try{
                let post = await POST_COLL.findOne({_id: id}).lean();
                if(post)
                  return resolve({error: false, data: post});
                return resolve({error: true, message: 'Cannot get post!'});
            }catch(err){
                return resolve({error: true, message: 'An error has occurred!'});
            }
        })
    }

    getListWithComment(filter){
        return new Promise(async resolve=>{
            try{
                let posts = await POST_COLL.find(filter)
                    .populate({
                        path: 'owner',
                        select: 'username name'
                    }).lean();
                for(let i=0; i<posts.length;i++){
                    let comments = await COMMENT_COLL.find({post: posts[i]._id})
                          .populate({
                            path: 'owner',
                            select: 'username name'
                          }).lean()
                    posts[i].comments = comments
                    
                }
                if(posts)
                  return resolve({error: false, data: posts});
                return resolve({error: true, message: 'Cannot get list!'});
            }catch(err){
                return resolve({error: true, message: 'An error has occurred!'});
            }
        })
    }
}

exports.SERVICE = new SERVICE;