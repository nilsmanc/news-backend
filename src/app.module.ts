import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NewsModule, CommentsModule, MongooseModule.forRoot(mongoLink)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
