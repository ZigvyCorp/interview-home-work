import { Body, Controller, Get, Patch, Request } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { PrivateRoute } from '~/shared/decorators/private.decorator';
import { ChangePasswordReqDto, UpdateProfileDto } from './dto';
import { ResponseMessage } from '~/utils/response-message';

@ApiTags('users')
@Controller('users')
@ApiSecurity('JWT-auth')
@PrivateRoute()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  @ApiSecurity('JWT-auth')
  @PrivateRoute()
  async getMe(@Request() req: any) {
    const { user } = req.context;

    const data = await this.userService.getUserById(user.id);

    return ResponseMessage({
      message: 'User fetched successfully',
      data,
    });
  }

  @Patch('/change-password')
  async changePassword(@Request() req: any, @Body() dto: ChangePasswordReqDto) {
    const { user } = req.context;
    const data = await this.userService.changePassword(user.id, dto);

    return ResponseMessage({
      message: 'Password changed successfully',
      data,
    });
  }

  @Patch('/update-profile')
  async updateProfile(@Request() req: any, @Body() dto: UpdateProfileDto) {
    const { user } = req.context;
    const data = await this.userService.updateProfile(user.id, dto);

    return ResponseMessage({
      message: 'Profile updated successfully',
      data,
    });
  }
}
