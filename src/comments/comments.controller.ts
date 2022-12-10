import { UpdateCommentDto } from './dto/update-comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './shemas/comments.schema';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  getAll(): Promise<Comment[]> {
    return this.commentsService.getAll();
  }

  @Get(':id')
  getNewsComments(@Param('id') id: string): Promise<Comment[]> {
    return this.commentsService.getNewsComments(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentsService.create(createCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Comment> {
    return this.commentsService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateCommentDto: UpdateCommentDto,
    @Param('id') id: string,
  ): Promise<Comment> {
    return this.commentsService.update(id, updateCommentDto);
  }
}
