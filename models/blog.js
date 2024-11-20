const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');
const User = require('./user');
const Model= Sequelize.Model;


const Blog = db.define('Blog',{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    tags:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    datecreate:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    headercontent:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    avatar:{
        type:DataTypes.STRING,
        allowNull:false,
    }
    
});
User.hasMany(Blog);
Blog.belongsTo(User);
Blog.findAllBlogs= async function(){
    return Blog.findAll(
        {
            include: [{
                model: User,
              }]
    });
}
Blog.findAllBlog= async function(idblog){
    return Blog.findAll(
        {
           where:{id:idblog}
    });
}
Blog.addBlog= async function(idBlog,title,tags,date,discripe,content,avatar,UserId){
    return Blog.create(
        {
            id:idBlog, title:title,tags:tags,datecreate:date,headercontent:discripe,content:content,avatar:avatar,UserId:UserId
    });
}
Blog.findById= async function(id){
    return Blog.findByPk(id);
}
// xóa blog
Blog.deleteblog =async function(idblog){
    return Blog.destroy(
        {
            where:{id:idblog}
    });
}
const Op = Sequelize.Op;
// tìm kiếm theo title và tags
Blog.searchblog= async function(textsearch){
    return Blog.findAll(
        {
            include: [{
                model: User,
              }],

              where:{ 
                [Op.or]: {   title: {     [Op.like]: `%${textsearch}%`   },   tags: {     [Op.like]: `%${textsearch}%`  } }
               
        }
    });
}
// lấy id max
Blog.onemax = async function() {
    return Blog.findAll({
        attributes: [Sequelize.fn('max', Sequelize.col('id'))],
        raw: true,
    });
}


module.exports=Blog;
