import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The username for the user',
    example: 'anhuu123',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'The password for the user',
    example: '123123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'The name for the user',
    example: 'Nguyên Hữu An',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    description: 'The date of birth for the user',
    example: '01/06/2016',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  dob: string;
}
