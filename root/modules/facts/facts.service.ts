import { Injectable } from '@nestjs/common';

@Injectable()
export class FactsService {
  constructor() {}

  readUsers(): string {
    return 'facts';
  }
}
