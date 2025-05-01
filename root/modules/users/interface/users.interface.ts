import { Document } from 'mongoose';
import { UserRoles } from '@app/modules/users/enum/users.role.enum';
import { UserLang } from '@app/modules/users/enum/users.lang.enum';

export interface IUser extends Document {
  _id: string;
  full_name: string;
  phone_number: string;
  lang: UserLang;
  role: UserRoles;
  notifications: boolean;
  dark_mode: boolean;
  facts: string[];
}
