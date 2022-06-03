import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/users.repository';
import { FindUserResponse } from './type/user.type';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UserRepository,
  ){}
  async create(createUserDto: CreateUserDto): Promise<boolean> {
    try {
      let userExisted: FindUserResponse[] = await this.userRepository.findOneByUsername(createUserDto.username);
      if(userExisted.length === 0) {
        let password:string = await bcrypt.hash(createUserDto.password,10);
        createUserDto.password = password;
        let userCreated = await this.userRepository.create(createUserDto);
        let saveUser = await this.userRepository.save(userCreated);
        return saveUser ? true : false;
      } 
      return false
    } catch (error) {
      console.log("createError: ",error)
      return false;
    }
  }

  async findAll(): Promise<FindUserResponse[] | null> {
    try {
      let listUser:FindUserResponse[] = await this.userRepository.find({where:{removed:false}});
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
      if(updateUserDto.password !== undefined) {
        let password = await bcrypt.hash(updateUserDto.password,10);
        updateUserDto.password = password;
      }
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
