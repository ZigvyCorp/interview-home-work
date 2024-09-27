import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginReqDto, RegisterReqDto, ResetPasswordReqDto } from './dto';
import { ResponseMessage } from '~/utils/response-message';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginReqDto) {
    const data = await this.authService.login(dto);

    return ResponseMessage({
      message: 'Login successful',
      data,
    });
  }

  @Post('register')
  async register(@Body() dto: RegisterReqDto) {
    const data = await this.authService.register(dto);

    return ResponseMessage({
      message: 'User registered successfully',
      data,
    });
  }

  @Post('reset-password')
  async resetPassword(@Body() dto: ResetPasswordReqDto) {
    const data = await this.authService.resetPassword(dto);

    return ResponseMessage({
      message: 'Password reset successfully',
      data,
    });
  }
}
