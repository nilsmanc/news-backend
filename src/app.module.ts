import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoLink } from 'variables';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    NewsModule,
    CommentsModule,
    UsersModule,
    MongooseModule.forRoot(mongoLink),
  ],
  controllers: [AppController, UsersController, AuthController],
  providers: [AppService, UsersService, AuthService],
})
export class AppModule {}
