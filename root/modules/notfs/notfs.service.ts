import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  constructor() {}

  readAllComments(): string {
    return 'notifications';
  }
}
