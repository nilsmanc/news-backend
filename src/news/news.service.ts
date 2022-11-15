import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  private news = [];

  getAll() {
    return this.news;
  }

  getById(id: string) {
    return this.news.find((p) => p.id === id);
  }
}
