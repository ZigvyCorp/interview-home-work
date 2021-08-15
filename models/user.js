const {DataTypes } = require('sequelize');
const db = require('./db');
const User = db.define('User',{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    token:{
        type:DataTypes.STRING,
    },
});

User.findByUser = async function(username){
    return User.findOne(
        {
            where: {
                username,
            },
        }
    );
};
User.findByEmail = async function(email){
    return User.findOne(
        {
            where: {
                email,
            },
        }
    );
};
User.findprofile = async function(UserId){
    return User.findAll(
        {
            where:{id:UserId}
        }
    );
};
User.Updateinfo = async function(username,email,UserId){
    return User.update({username:username,email:email},
        {
                where: {
                    id: UserId,
        
                }     
            });
};
User.findById = async function(id){
    return User.findByPk(id);
};

module.exports=User;