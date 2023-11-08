import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule.forRoot({ folder: './configs', isGlobal: false })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
