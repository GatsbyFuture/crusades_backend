import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FactsController } from '@app/modules/facts/facts.controller';
import { FactsService } from '@app/modules/facts/facts.service';
import { FactSchema } from '@app/modules/facts/model/facts.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'facts', schema: FactSchema }])],
  controllers: [FactsController],
  providers: [FactsService],
})
export class FactsModule {}
