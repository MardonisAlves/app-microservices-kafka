import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/database.module';
import UsersRepositories from './repositories/user-repositories';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),
  DbModule
],
  controllers: [AppController],
  providers: [AppService, UsersRepositories],
})
export class AppModule {}
