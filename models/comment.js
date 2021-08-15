const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');
const User = require('./user');
const Blog = require('./Blog');
const Model= Sequelize.Model;


const Comment = db.define('Comment',{
    content:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    datecmt:{
        type:DataTypes.DATE,
        allowNull:false,
    }
});
User.hasMany(Comment);
Comment.belongsTo(User);

Blog.hasMany(Comment);
Comment.belongsTo(Blog);

Comment.findAllComment= async function(idblog){
    return Comment.findAll(
        {
            attributes: [[Sequelize.fn('COUNT', Sequelize.col('BlogId')), 'commentCount'],],
            where: {
              BlogId: idblog,
            },
    });
}
Comment.UserComment= async function(idblog){
    return Comment.findAll(
        {
            include: {
                model: User,
              },
              where:{BlogId: idblog}
    });
}

Comment.addComment= async function( content, datePost, userId,blogId){
    return Comment.create(
        {
            
        content:content, datecmt: datePost,UserId:userId, BlogId: blogId
           
    });
}

module.exports=Comment;
