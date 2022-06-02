import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
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
      let listUser:FindUserResponse[] = await this.userRepository.find();
      return listUser ? listUser : null
    } catch (error) {
      console.log("findAllErr: ",error);
      return null
    }
  }

  async findOne(id: number): Promise<FindUserResponse | null> {
    try {
      let listUser:FindUserResponse = await this.userRepository.findOne(id, {
        where: {
          removed: false
        }
      });
      return listUser ? listUser : null
    } catch (error) {
      console.log("findOneErr: ",error);
      return null
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<UpdateResult | boolean> {
    try {
      let updateUserResult:UpdateResult = await this.userRepository.update(id,updateUserDto);
      return updateUserResult
    } catch (error) {
      console.log("update: ", error)
      return false
    }
  }

  async remove(id: number):Promise<UpdateResult | boolean> {
    try {
      let removeUserResult:UpdateResult = await this.userRepository.update(id, {
        removed:true
      })
      return removeUserResult
    } catch (error) {
      console.log("remove: ",error);
      return false
    }
  }
}
