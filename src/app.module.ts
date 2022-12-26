import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    NewsModule,
    CommentsModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(process.env.MONGODB_LINK),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
