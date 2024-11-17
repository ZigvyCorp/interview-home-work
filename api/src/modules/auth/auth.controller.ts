import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IUserOmitPassword } from '../user/interface/user.interface';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { IRequestAuth } from './interface/auth.interface';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login' })
  @Post('login')
  login(@Body() authDto: AuthDto, @Request() req: IRequestAuth<IUserOmitPassword>) {
    return this.authService.login({
      user: req.user,
    });
  }
}
