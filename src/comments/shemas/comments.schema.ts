import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CommentsDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  text: string;

  @Prop()
  newsItem: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comment);
