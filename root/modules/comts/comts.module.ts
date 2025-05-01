import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsController } from '@app/modules/comts/comts.controller';
import { CommentsService } from '@app/modules/comts/comts.service';
import { commentSchema } from '@app/modules/comts/model/comts.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'comts', schema: commentSchema }]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
