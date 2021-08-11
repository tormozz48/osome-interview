/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '.dev.env' });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');

  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
