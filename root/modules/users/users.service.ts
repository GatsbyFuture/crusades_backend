import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interface/users.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private readonly userModel: Model<IUser>) {}

  readUsers(): string {
    return 'users';
  }

  async updateUser(query: any, user: any): Promise<IUser> {
    return this.userModel
      .findOneAndUpdate(query, { $set: user }, { new: true, upsert: true })
      .exec();
  }
}
