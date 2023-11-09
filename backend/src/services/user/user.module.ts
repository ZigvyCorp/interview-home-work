import { Module } from '@nestjs/common';
import { UserSevice } from './user.service';
import { UserController } from 'src/controller/user/user.controller';
import { DatabaseModule } from 'src/framework/database-mongodb/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserSevice],
  controllers: [UserController],
  exports: [],
})
export class UserModule {}
