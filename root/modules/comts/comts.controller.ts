import { Controller, Get } from '@nestjs/common';
import { CommentsService } from '@app/modules/comts/comts.service';

@Controller('comts')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  getAllComments() {
    return this.commentsService.readAllComments();
  }
}
