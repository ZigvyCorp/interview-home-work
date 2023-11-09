import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
  public buildMongooseQuery() {
    console.log('oke');
    return 'mongoose query built';
  }
}
