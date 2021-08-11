import { Module } from '@nestjs/common';
import { HealtcheckController } from './healtcheck.controller';

@Module({
  imports: [],
  controllers: [
    HealtcheckController,
  ],
  providers: [],
})
export class HealtcheckModule { }
