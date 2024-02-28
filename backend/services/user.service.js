const axiosClient = require("../utils/axiosClient");

const getFakeDate = require("../utils/getFakeDate");
const getPassword = require("../utils/getPassword");

class UserService {
    getUsers = async () => {
        const url = '/users';
        let users = await axiosClient.get(url);

        users = users.map(user => {
            return {
                id: user.id,
                username: user.username,
                password: getPassword(10),
                name: user.name,
                dob: getFakeDate(new Date("1900/01/01"), new Date("2000/01/01")),
                created_at: getFakeDate(new Date("2010/01/01"), new Date())
            };
        });

        return users;
    };
}

module.exports = new UserService();