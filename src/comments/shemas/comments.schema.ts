import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CommentsDocument = Comment & Document;

@Schema({ timestamps: true })
export class Comment {
  @Prop()
  text: string;

  @Prop()
  newsItem: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comment);
