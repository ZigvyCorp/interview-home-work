import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @ApiProperty({
    example: 'anhuu123',
    description: 'The username of the user',
  })
  username: string;

  @IsString()
  @ApiProperty({
    example: '123123',
    description: 'The password of the user',
  })
  password: string;
}
