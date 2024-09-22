import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Get('import')
  importMockData() {
    return this.dataService.importMockData();
  }
}
