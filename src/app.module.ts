import { Module } from '@nestjs/common';
import { DatabaseModule } from './adapters/database/database.module';
import { HealtcheckModule } from './healthcheck/healtcheck.module';

@Module({
  imports: [
    DatabaseModule,
    HealtcheckModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
