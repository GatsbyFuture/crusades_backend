import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsController } from '@app/modules/notfs/notfs.controller';
import { NotificationsService } from '@app/modules/notfs/notfs.service';
import { NotificationSchema } from '@app/modules/notfs/model/notfs.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'notfs', schema: NotificationSchema }]),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
