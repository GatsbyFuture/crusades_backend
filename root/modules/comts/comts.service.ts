import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
  constructor() {}

  readAllComments(): string {
    return 'comments';
  }
}
