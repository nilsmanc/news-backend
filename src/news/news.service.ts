import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { News, NewsDocument } from './schemas/news.schema';

@Injectable()
export class NewsService {
  constructor(@InjectModel(News.name) private newsModel: Model<NewsDocument>) {}

  async getAll(): Promise<News[]> {
    return this.newsModel.find().exec();
  }

  async getById(id: string): Promise<News> {
    return this.newsModel.findById(id);
  }
}
