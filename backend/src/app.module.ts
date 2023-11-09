import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommentModule } from "./services/comment/comment.module";
import { PostModule } from "./services/post/post.module";
import { UserModule } from "./services/user/user.module";
import { DatabaseModule } from "./framework/database-mongodb/database.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    CommentModule,
    PostModule,
    UserModule,
    DatabaseModule,
    MongooseModule.forRoot(
      "mongodb+srv://doadmin:rR0J35Z71VWio928@db-mongodb-sgp1-76973-464ced0f.mongo.ondigitalocean.com/C300AMG?tls=true&authSource=admin&replicaSet=db-mongodb-sgp1-76973",
      {}
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
