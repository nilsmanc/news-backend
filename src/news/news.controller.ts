import { Controller, Get, Param } from '@nestjs/common';

import { NewsService } from './news.service';
import { News } from './schemas/news.schema';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getAll(): Promise<News[]> {
    return this.newsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<News> {
    return this.newsService.getById(id);
  }

  @Get('category')
  getCategoryNews(@Param('category') category: string): Promise<News[]> {
    return this.newsService.getByCategory(category);
  }
}
