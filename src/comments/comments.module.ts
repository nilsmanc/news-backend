import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from '../auth/auth.module';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comment, CommentsSchema } from './shemas/comments.schema';

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentsSchema }]),
    AuthModule,
  ],
})
export class CommentsModule {}
