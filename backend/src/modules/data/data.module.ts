import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { globalEntities } from '../../utils/global-entities';
import { DataService } from './data.service';
import { DataController } from './data.controller';

@Module({
  imports: [TypeOrmModule.forFeature(globalEntities)],
  providers: [DataService],
  exports: [DataService],
  controllers: [DataController],
})
export class DataModule {}
