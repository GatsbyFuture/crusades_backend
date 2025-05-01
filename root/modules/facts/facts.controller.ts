import { Controller, Get } from '@nestjs/common';
import { FactsService } from '@app/modules/facts/facts.service';

@Controller('facts')
export class FactsController {
  constructor(private readonly factsService: FactsService) {}

  @Get()
  getAllFacts() {
    return this.factsService.readUsers();
  }
}
