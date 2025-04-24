import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configs } from './configs/configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(configs.PORT || 5000);
  // for logging
  const logger = new Logger('Bootstrap');
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

(async function () {
  await bootstrap();
})();
