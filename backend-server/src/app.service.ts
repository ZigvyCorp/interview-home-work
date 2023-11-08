import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { HELLO_MESSAGE } from './app.constant';

@Injectable()
export class AppService {
  private readonly helloMessage: string;

  constructor(configService: ConfigService) {
    this.helloMessage = configService.get(HELLO_MESSAGE);
  }

  getHello(): string {
    return this.helloMessage;
  }
}
