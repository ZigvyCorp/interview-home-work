import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from '../../common/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ChangePasswordReqDto, UpdateProfileDto } from './dto';
import { hashPassword } from '~/utils/password';

@Injectable()
export class UserService {
  constructor(
    readonly dataSource: DataSource,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async checkUserExist(id: number) {
    const user = await this.getUserById(id);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  async getUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: ['posts', 'comments'],
    });

    return user;
  }

  async changePassword(id: number, dto: ChangePasswordReqDto) {
    await this.checkUserExist(id);

    const passwordHash = hashPassword(dto.newPassword);

    return await this.userRepository.update({ id }, { password: passwordHash });
  }

  async updateProfile(id: number, dto: UpdateProfileDto) {
    await this.checkUserExist(id);

    return await this.userRepository.update({ id }, dto);
  }
}
