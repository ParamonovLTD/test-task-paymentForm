import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log('server started on ' + PORT)
  await app.listen(PORT);
}
bootstrap();
