import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: `http://localhost:${process.env.FRONT_END_PORT}`,
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
