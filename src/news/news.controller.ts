import { Controller, Get, Param } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getAll() {
    return this.newsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.newsService.getById(id);
  }
}
