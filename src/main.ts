import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { loadEnvVariables } from '@config/variables';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(loadEnvVariables().port, '0.0.0.0'); // keep it 0.0.0.0 for container friendly
}
bootstrap();
