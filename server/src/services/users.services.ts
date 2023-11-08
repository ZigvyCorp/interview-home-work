import { RegisterReqBody } from '~/models/requests/User.requests';
import User from '~/models/schemas/User.schema';
import databaseService from './database.services';
import { hashPassword } from '~/utils/crypto';

class UsersService {
  // Đăng ký
  async register(body: RegisterReqBody) {
    const { insertedId } = await databaseService.users.insertOne(
      new User({
        ...body,
        password: hashPassword(body.password)
      })
    );
    const user = await databaseService.users.findOne(
      {
        _id: insertedId
      },
      {
        projection: {
          password: 0
        }
      }
    );
    return {
      user
    };
  }
}

const usersService = new UsersService();
export default usersService;
