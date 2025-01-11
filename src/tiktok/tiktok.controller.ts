import { Controller, Get, Query } from '@nestjs/common';
import { TiktokService } from './tiktok.service';

@Controller('tiktok')
export class TiktokController {
  constructor(private readonly tiktokService: TiktokService) {}

  @Get('user-info')
  async getUserInfo(@Query('uniqueId') uniqueId: string) {
    return this.tiktokService.getUserInfo(uniqueId);
  }

}
