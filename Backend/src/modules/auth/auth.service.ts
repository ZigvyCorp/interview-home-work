import { Repository } from 'typeorm';
import { LoginReqDto, RegisterReqDto, ResetPasswordReqDto } from './dto';
import { UserEntity } from 'src/common/entities/user.entity';
import { hashPassword, verifyPassword } from 'src/utils/password';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Token } from 'src/common/configs/type/token.type';
import { JwtService } from '~/shared/jwt/jwt.service';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from 'src/common/configs/type/config.type';
import { InjectRepository } from '@nestjs/typeorm';
import ms from 'ms';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<AllConfigType>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private async checkUserExist(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return user;
  }

  async login(dto: LoginReqDto) {
    const { email, password } = dto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password', 'name', 'username'],
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const { password: passwordUser, ...userWithoutPassword } = user;

    const isPasswordValid = await verifyPassword(password, passwordUser);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const token = await this.createToken(user);

    return {
      user: userWithoutPassword,
      ...token,
    };
  }

  async register(dto: RegisterReqDto) {
    const { email, password, name } = dto;

    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const passwordHash = hashPassword(password);

    const savedUser = await this.userRepository.save(
      this.userRepository.create({
        email,
        password: passwordHash,
        name,
      }),
    );

    const tokenExpiresIn = this.configService.get('auth.confirmEmailExpires', {
      infer: true,
    });

    const token = await this.jwtService.signConfirmationToken({
      user: savedUser,
      expiresIn: tokenExpiresIn,
    });

    return {
      token,
    };
  }

  private async createToken(user: UserEntity): Promise<Token> {
    const tokenExpiresIn = this.configService.getOrThrow('auth.expires', {
      infer: true,
    });
    const tokenExpires = Date.now() + ms(tokenExpiresIn);

    const accessToken = await this.jwtService.signAccessToken({
      user,
      expiresIn: tokenExpiresIn,
    });
    return {
      accessToken,
      tokenExpires,
    } as Token;
  }

  async resetPassword(dto: ResetPasswordReqDto) {
    const { token, newPassword } = dto;
    const isValid =
      await this.jwtService.validateResetPasswordConfirmationToken(token);

    if (!isValid) {
      throw new BadRequestException('Invalid token');
    }

    const newHashPassword = hashPassword(newPassword);

    await this.userRepository.update(
      { id: isValid.id },
      { password: newHashPassword },
    );

    return {
      code: 'Success',
    };
  }
}
