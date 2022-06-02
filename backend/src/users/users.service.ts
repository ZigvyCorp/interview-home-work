import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/users.repository';
import { FindUserResponse } from './type/user.type';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UserRepository,
  ){}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<FindUserResponse[] | null> {
    try {
      let listUser:FindUserResponse[] = await this.userRepository.findAllUser();
      return listUser ? listUser : null
    } catch (error) {
      console.log("findAllErr: ",error);
      return null
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
