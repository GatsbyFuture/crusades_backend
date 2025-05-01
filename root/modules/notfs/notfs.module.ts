import { Module } from '@nestjs/common';
import { NotificationsController } from '@app/modules/notfs/notfs.controller';
import { NotificationsService } from '@app/modules/notfs/notfs.service';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
