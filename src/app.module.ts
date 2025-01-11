import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiktokService } from './tiktok/tiktok.service';
import { TiktokController } from './tiktok/tiktok.controller';

@Module({
  imports: [],
  controllers: [AppController, TiktokController],
  providers: [AppService, TiktokService],
})
export class AppModule {}
