const user = require('../models/User');


class UserController{

    // POST /api/users/create
    // example input : 
    // {
    //     "id": 5,
    //      "username": "user",
    //      "password": "user",
    //      "name": "",
    //      "dob": "",
    //      "created_at": 1576506719083
    //  }

    create(req, res,next){
        var newAccount = new user(req.body);
                newAccount.save()
                .then(res.json({
                    Response : "Create Account Successfully !"
                }))
                .catch(next);
    }

    // GET /api/users/signin
    // example input:
    // {
    //     "username" : "meowmeow",
    //     "password" : "1234567890"
    // }
    signin(req, res, next){
        user.findOne({username : req.body.username}, (err,account) => {
            if(!account){
                res.send("Username doesn't exists");
            }else{
                if(account.password === req.body.password){
                    res.json(account);
                }else{
                    res.send('Wrong passord');
                }
            }
        });
    }

    infobyid(req, res){
        user.findOne({id: req.params.id})
        .then(info => res.json(info))
        .catch(err => res.json({Error : err}));
    }

}

module.exports = new UserController;