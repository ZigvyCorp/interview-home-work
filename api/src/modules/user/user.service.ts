import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { omit } from 'lodash';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { ICreateUser } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async hashPassword(password: string): Promise<string> {
    const hash = await argon2.hash(password, {
      type: argon2.argon2id,
    });
    return hash;
  }

  async findUserByUsername(username: string) {
    return this.userRepo.findOne({
      where: {
        username,
      },
    });
  }

  async create(payload: ICreateUser) {
    try {
      const existingUser = await this.findUserByUsername(payload.username);
      if (existingUser) {
        throw new BadRequestException('username already exists');
      }
      const hash = await this.hashPassword(payload.password);
      const user = await this.userRepo.save({
        username: payload.username,
        name: payload.name,
        dob: new Date(payload.dob),
        password: hash,
      });
      return {
        data: omit(user, ['password']),
        message: 'User created successfully',
      };
    } catch (error) {
      throw error;
    }
  }
}
