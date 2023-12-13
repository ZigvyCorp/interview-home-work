import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class UserDto {
  @Expose()
  @IsOptional()
  id?: number;

  @Expose()
  @IsOptional()
  name?: string;

  @Expose()
  @IsOptional()
  username?: string;

  @Expose()
  @IsOptional()
  email?: string;

  @Expose()
  @IsOptional()
  phone?: string;

  @Expose()
  @IsOptional()
  website?: string;
}
