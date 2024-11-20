const {axiosServer} = require("../config.js");

module.exports.getAllUsers = async (req,res) =>{ 
    try {
        const response = await axiosServer.get('/users');
        const arrayUsers = response.map((user)=>{
            return {
                id: user.id,
                username: user.username,
                password: "123456",
                name: user.name,
                dob:"",
                created_at: Date.now(),
            }
        })
        res.status(200).json(arrayUsers);

    } catch (error) {
        res.status(404).send('not found!');
    }
}
