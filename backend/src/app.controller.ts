import { Controller, Get } from "@nestjs/common";
import { IMongoDbServices } from "./core/abstract/data-services/data-mongodb-service.abstract";

@Controller()
export class AppController {
  constructor(private readonly db: IMongoDbServices) {}

  @Get()
  async getHello() {}
}
