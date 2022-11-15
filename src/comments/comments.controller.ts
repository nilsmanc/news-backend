import { updateCommentDto } from './dto/update-comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('comments')
export class CommentsController {
  @Get()
  getAll() {
    return 'getAll';
  }

  @Post()
  create(@Body() createCommentDto: CreateCommentDto): string {
    return `Title: ${createCommentDto.title} Text: ${createCommentDto.text}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove' + id;
  }

  @Put(':id')
  update(@Body() updateCommentDto: updateCommentDto, @Param('id') id: string) {
    return 'Update' + id;
  }
}
