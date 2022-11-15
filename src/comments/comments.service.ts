import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  private comments = [];

  getAll() {
    return this.comments;
  }

  create(commentDto: CreateCommentDto) {
    this.comments.push({
      ...commentDto,
      id: Date.now().toString(),
    });
  }
}
