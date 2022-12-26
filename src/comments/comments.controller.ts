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
  UseGuards,
} from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';

import { UpdateCommentDto } from './dto/update-comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsService } from './comments.service';
import { Comment } from './shemas/comments.schema';
import { JWTGuard } from '../auth/guards/jwt.guards';
import { AuthService } from '../auth/auth.service';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getAll(): Promise<Comment[]> {
    return this.commentsService.getAll();
  }

  @Get(':id')
  getNewsComments(@Param('id') id: string): Promise<Comment[]> {
    return this.commentsService.getNewsComments(id);
  }

  @UseGuards(JWTGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createCommentDto: CreateCommentDto,
    @Req() req,
  ): Promise<Comment> {
    const user = await this.authService.getUserByTokenData(req.token);

    return await this.commentsService.create({
      ...createCommentDto,
      user: user._id as string,
    });
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
