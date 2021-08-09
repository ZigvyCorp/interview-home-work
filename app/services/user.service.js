const USER_COLL = require('../models/user.model');
const bcrypt = require('bcrypt');

class SERVICE{
    insert(data){
        return new Promise(async resolve =>{
            try{
                console.log(data)
                let existed = await USER_COLL.findOne({username: data.username})
                if(existed){
                    return resolve({error: true, message: 'Username already exists!'});
                }
                data.password = await bcrypt.hash(data.password, 10);
                let user = await new USER_COLL(data).save();
                if(user)
                  return resolve({error: false, message: 'successfully added user!'});
                return resolve({error: true, message: 'Cannot add user!'});
            }catch(err){
                console.log(err)
                return resolve({error: true, message: 'An error has occurred!'});
            }
        })
    }

    getById(id){
        return new Promise(async resolve=>{
            try{
                let user = await USER_COLL.findOne({_id: id}).lean();
                if(user)
                  return resolve({error: false, data: user});
                return resolve({error: true, message: 'Cannot get user!'});
            }catch(err){
                return resolve({error: true, message: 'An error has occurred!'});
            }
        })
    }

    getList(){
        return new Promise(async resolve=>{
            try{
                let users = await USER_COLL.find().lean();
                if(users)
                  return resolve({error: false, data: users});
                return resolve({error: true, message: 'Cannot get list!'});
            }catch(err){
                return resolve({error: true, message: 'An error has occurred!'});
            }
        })
    }
}

exports.SERVICE = new SERVICE;