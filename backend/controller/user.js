const userService = require("../services/user")

const apiGetUser = async (req, res, next) => {
    try {
        const users = await userService.apiGetAllusers
        if(!users) {
            res.status(404).json("There are no users found yet!");
        }
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


module.exports = {
    apiGetUser
   
}