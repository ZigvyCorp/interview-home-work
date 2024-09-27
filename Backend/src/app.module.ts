import { Module } from '@nestjs/common';
import generateModulesSet from './utils/module-set';

@Module({
  imports: generateModulesSet(),
})
export class AppModule {}
