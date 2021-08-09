db.users.find().forEach(e => {
    if(e.id){
        db.comments.updateMany({owner: e.id}, {$set: {owner: e._id}})
        db.posts.updateMany({owner: e.id}, {$set: {owner: e._id}})
        db.users.updateOne({_id: e._id}, {$unset: {id: 1}})
        db.users.updateOne({_id: e._id}, {$set: {created_at: new Date()}})
    }
});

db.posts.find().forEach(e=>{
    if(e.id){
        db.comments.updateMany({post: e.id}, {$set: {post: e._id}})
        db.posts.updateOne({_id: e._id}, {$unset: {id: 1}})
        db.posts.updateOne({_id: e._id}, {$set: {created_at:  new Date()}})
    }
})

db.comments.find().forEach(e=>{
    if(e.id){
        db.comments.updateOne({_id: e._id}, {$unset: {id: 1}})
        db.comments.updateOne({_id: e._id}, {$set: {created_at:  new Date()}})
    }
})

db.users.deleteMany({})
db.posts.deleteMany({})
db.comments.deleteMany({})