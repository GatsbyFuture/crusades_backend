import { Module } from '@nestjs/common';
import { CommentsController } from '@app/modules/comts/comts.controller';
import { CommentsService } from '@app/modules/comts/comts.service';

@Module({
  imports: [],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
