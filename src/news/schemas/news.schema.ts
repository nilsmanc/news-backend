import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type NewsDocument = News & Document;

@Schema()
export class News {
  @Prop()
  title: string;

  @Prop()
  text: string;
}

export const NewsSchema = SchemaFactory.createForClass(News);
