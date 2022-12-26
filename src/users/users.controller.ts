import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { User } from './schemas/users.schemas';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get()
  getOne(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }
}
