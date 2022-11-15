import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { CommentsController } from './comments/comments.controller';

@Module({
  imports: [],
  controllers: [AppController, NewsController, CommentsController],
  providers: [AppService],
})
export class AppModule {}
