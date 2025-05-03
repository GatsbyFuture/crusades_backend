import { Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): string {
    return this.usersService.readUsers();
  }

  @Post()
  async updateUser(): Promise<any> {
    return 'success';
  }
}
