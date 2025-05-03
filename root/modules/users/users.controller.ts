import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from './users.service';

// dto
import { UpdateUserDto } from '@app/modules/users/dto/users.update.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): string {
    return this.usersService.readUsers();
  }

  @Post('/create')
  async updateUser(
    @Body()
    updateUserDto: UpdateUserDto,
  ): Promise<any> {
    const { mobile_id, ...user } = updateUserDto;
    const created = await this.usersService.updateUser(
      {
        mobile_id: mobile_id,
      },
      user,
    );
    return {
      status: 201,
      data: created,
    };
  }
}
