import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '~/shared/jwt/jwt.module';
import { PostModule } from './posts/post.module';
import { CommentModule } from './comments/comment.module';

@Module({
  imports: [JwtModule, AuthModule, UserModule, PostModule, CommentModule],
})
export class ApiModule {}
