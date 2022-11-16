import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoLink } from 'variables';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    NewsModule,
    CommentsModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(mongoLink),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
