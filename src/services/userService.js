'use strict';
const { Service } = require("../../system/services/Service");
class UserService extends Service{
    constructor(model) {
        super(model);
        this.model = model;
    }


    async findAllUser() {
        try {
            const users = await this.model.find();
            if (users) {
                return users;
            }
            throw new Error('Có lỗi, bạn có thể thử lại sau');
        } catch (error) {
            throw new Error(error.message || 'Có lỗi, bạn có thể thử lại sau');
        }
    }

    async createUser(body) {
        try {
            const item = await this.model.create(body);
              if (item) {
                  return item;
              }
              throw new Error('Có lỗi, bạn có thể thử lại sau');
          
        } catch (error) {
            throw new Error(error.message || 'Có lỗi, bạn có thể thử lại sau');
        }
      }
 
}

module.exports = { UserService };