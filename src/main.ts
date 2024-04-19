import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Define CORS options
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  const config = new DocumentBuilder()
    .setTitle('Canteen and Nursing')
    .setDescription('The canteen and nursing API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useStaticAssets(path.join(__dirname, '../public'));
  // Enable CORS
  app.enableCors(corsOptions);
  await app.listen(3002);

  app.useGlobalPipes(new ValidationPipe()); // It help to use golbally validation
}
bootstrap();
