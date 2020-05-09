import userList from '../data/users.json'
import { USER_PROFILE } from '../utils/Configs';


export default class LoginBusiness {
    constructor() {
    }

    login(loginData, success, failed) {
        var userData = {}
        userList.map((user) => {
            if (user.username == loginData.userName && user.password == loginData.password) {
                userData = user;
                USER_PROFILE.USER_ID = user.id;
                USER_PROFILE.USER_NAME = user.username;
                USER_PROFILE.DISPLAY_NAME = user.name;
                USER_PROFILE.BIRTHDAY = user.dob;
            }
        })
        if(userData.id != undefined){
            success([userData]);
        }else{
            failed('Invalid username/password...');
        }
    }
}
