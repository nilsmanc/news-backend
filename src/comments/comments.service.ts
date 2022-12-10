import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment, CommentsDocument } from './shemas/comments.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentsModel: Model<CommentsDocument>,
  ) {}

  async getAll() {
    return this.commentsModel.find().exec();
  }

  async getNewsComments(id: string) {
    return this.commentsModel.find({ newsItem: { _id: id } }).exec();
  }

  async create(commentDto: CreateCommentDto): Promise<Comment> {
    const newComment = new this.commentsModel(commentDto);
    return newComment.save();
  }

  async remove(id: string): Promise<Comment> {
    return this.commentsModel.findByIdAndRemove(id);
  }

  async update(id: string, commentDto: UpdateCommentDto): Promise<Comment> {
    return this.commentsModel.findByIdAndUpdate(id, commentDto, { new: true });
  }
}
