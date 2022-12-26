import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { News, NewsSchema } from './schemas/news.schema';

@Module({
  providers: [NewsService],
  controllers: [NewsController],
  imports: [
    MongooseModule.forFeature([{ name: News.name, schema: NewsSchema }]),
  ],
})
export class NewsModule {}
