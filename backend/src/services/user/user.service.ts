import { Injectable } from '@nestjs/common';
import { IMongoDbServices } from 'src/core/abstract/data-services/data-mongodb-service.abstract';
import { IUser } from 'src/core/interface/user.interface';

@Injectable()
export class UserSevice {
  constructor(private readonly db: IMongoDbServices) {}

  async getUsers(): Promise<IUser[]> {
    return this.db.userRepo.findAll();
  }
}
