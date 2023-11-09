import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommentModule } from "./services/comment/comment.module";
import { PostModule } from "./services/post/post.module";
import { UserModule } from "./services/user/user.module";
import { DatabaseModule } from "./framework/database-mongodb/database.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [CommentModule, PostModule, UserModule, DatabaseModule, MongooseModule.forRoot("mongodb://localhost:27017", {})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
