import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from '@app/modules/notfs/notfs.service';

@Controller('notfs')
export class NotificationsController {
  constructor(private readonly commentsService: NotificationsService) {}

  @Get()
  getAllComments() {
    return this.commentsService.readAllComments();
  }
}
