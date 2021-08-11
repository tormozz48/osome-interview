import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('/healthcheck')
export class HealtcheckController {
  @Get()
  @HttpCode(200)
  public ping(): {status: string} {
    return { status: 'OK' };
  }
}
