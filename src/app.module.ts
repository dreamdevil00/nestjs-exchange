import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { PhotoModule } from './modules/photo/photo.module';

@Module({
  imports: [PhotoModule],
  controllers: [AppController],
  components: [],
})
export class AppModule {}
