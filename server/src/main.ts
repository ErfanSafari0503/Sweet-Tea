import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

BigInt.prototype["toJSON"] = function () {
  return Number.parseInt(this.toString()) ?? this.toString();
};

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  });

  await app.listen(process.env.PORT ?? 3002);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
