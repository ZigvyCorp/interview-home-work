const fetch = require('node-fetch');
const {mock_url} = require('../const/config')
const { v4: uuidv4 } = require('uuid');
const getAllUser = async (req,res)=>{
    const response = await fetch(mock_url+"/users");
    const users = await response.json();
    console.log(users)
    const newusers = users.map((user,i) =>{
        return {
            "id": user.id,
            "username": user.username,
            "password": uuidv4().split("-").join(""),
            "name": users.name,
            "dob": new Date((new Date()).getTime() - (i * Math.floor(Math.random() * 101) )*1000*60*60*24).toISOString().split("T")[0].split("-").reverse().join("/"),
            "created_at": (new Date()).getTime() - i*1000*60*60,
          }
    })
    return res.json(newusers)
}


module.exports = {
    getAllUser
}