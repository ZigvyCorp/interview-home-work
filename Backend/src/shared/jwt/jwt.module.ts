import { Global, Module } from '@nestjs/common';

import { JwtStrategy } from './jwt-strategy.service';
import { JwtService } from './jwt.service';
import { UserModule } from '~/modules/users/user.module';

@Global()
@Module({
  imports: [UserModule],
  providers: [JwtService, JwtStrategy],
  exports: [JwtService],
})
export class JwtModule {}
