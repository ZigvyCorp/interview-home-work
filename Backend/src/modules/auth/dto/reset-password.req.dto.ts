import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordReqDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  newPassword: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  token: string;
}
