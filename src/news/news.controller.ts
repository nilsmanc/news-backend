import { Controller, Get, Param } from '@nestjs/common';

@Controller('news')
export class NewsController {
  @Get()
  getAll() {
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return 'getOne' + id;
  }
}
