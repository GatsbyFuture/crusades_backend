import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// configs
import { configs } from './configs/configs';
// all module
import { UsersModule } from '@app/modules/users/users.module';
import { FactsModule } from '@app/modules/facts/facts.module';
import { CommentsModule } from '@app/modules/comts/comts.module';
import { NotificationsModule } from '@app/modules/notfs/notfs.module';

@Module({
  imports: [
    MongooseModule.forRoot(configs.MONGODB.URL, {
      authSource: 'admin',
    }),
    UsersModule,
    FactsModule,
    CommentsModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
