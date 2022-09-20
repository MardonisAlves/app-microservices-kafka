import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/database.module';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),
  DbModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
