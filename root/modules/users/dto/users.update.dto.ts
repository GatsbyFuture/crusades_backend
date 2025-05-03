import { UserRoles } from '@app/modules/users/enum/users.role.enum';
import { UserLang } from '@app/modules/users/enum/users.lang.enum';

export class UpdateUserDto {
  full_name: string;
  lang: UserLang;
  phone_number: string;
  mobile_id: string;
  role: UserRoles;
  notifications: boolean;
  dark_mode: boolean;
  facts: string[];
}
