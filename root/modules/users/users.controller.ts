import { Controller, Post, Get, Body, Query, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

// dto
import { UpdateUserDto } from '@app/modules/users/dto/users.update.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  async createUser(@Body() updateUserDto: UpdateUserDto): Promise<any> {
    const { mobile_id, ...user } = updateUserDto;
    const created_user = await this.usersService.updateUser(
      {
        mobile_id: mobile_id,
      },
      user,
    );
    return {
      success: true,
      data: created_user,
    };
  }

  @Get('/get-all')
  async getAllUsers(@Body() query: any): Promise<any> {
    const users = await this.usersService.readUsers(query);
    return {
      success: true,
      data: users,
    };
  }

  @Get('/get-one')
  async getOneUser(@Query() query: any): Promise<any> {
    const { id, mobile_id } = query;
    let filter: any = {};

    if (id) {
      filter._id = id;
    }

    if (mobile_id) {
      filter.mobile_id = mobile_id;
    }

    const user = await this.usersService.readUser(filter);
    return {
      success: true,
      data: user,
    };
  }

  @Patch('/update')
  async updateUser(@Body() updateUserDto: UpdateUserDto): Promise<any> {
    const { mobile_id, ...user } = updateUserDto;
    const updated_user = await this.usersService.updateUser(
      {
        mobile_id: mobile_id,
      },
      user,
    );
    return {
      success: true,
      data: updated_user,
    };
  }
}
