import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { CommentsController } from './comments/comments.controller';
import { NewsService } from './news/news.service';
import { CommentsService } from './comments/comments.service';

@Module({
  imports: [],
  controllers: [AppController, NewsController, CommentsController],
  providers: [AppService, NewsService, CommentsService],
})
export class AppModule {}
