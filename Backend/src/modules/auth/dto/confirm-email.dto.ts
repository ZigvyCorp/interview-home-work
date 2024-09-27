import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ConfirmEmailDto {
  @ApiProperty()
  @IsString()
  token: string;
}
