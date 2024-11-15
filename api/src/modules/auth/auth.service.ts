import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { omit } from 'lodash';
import { IUserOmitPassword } from '../user/interface/user.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async validateUser(payload: { username: string; password: string }) {
    const { username, password } = payload;
    const user = await this.userRepo.findOne({ where: { username: username } });
    if (user) {
      const isPasswordMatch = await argon2.verify(user.password, password);
      if (isPasswordMatch) {
        return omit(user, 'password');
      }
    }
    return null;
  }

  async login({ user }: { user: IUserOmitPassword }) {
    return {
      access_token: this.jwtService.sign({
        id: user.id,
        username: user.username,
        name: user.name,
      }),
      user,
    };
  }
}
