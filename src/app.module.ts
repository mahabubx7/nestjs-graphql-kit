import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { loadEnvVariables } from '@config/variables';
import { dbProviders } from '@config/database';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadEnvVariables],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ...dbProviders],
})
export class AppModule {}
