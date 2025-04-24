import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  readUsers(): string {
    return 'users';
  }
}
