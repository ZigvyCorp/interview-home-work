import { Injectable, NotFoundException } from '@nestjs/common';
import { UserType } from './user';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UpdateUserForm } from './dtos/update-user.form';
import { CreateUserForm } from './dtos/create-user.form';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<UserType>,
  ) {}
  create(user: CreateUserForm) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async findById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  getAll() {
    return this.userRepository.find();
  }

  async update(id: number, updateUserForm: UpdateUserForm) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    Object.assign(user, updateUserForm);

    return this.userRepository.save(user);
  }

  delete(id: number) {
    this.userRepository.delete(id);
    return null;
  }
}
