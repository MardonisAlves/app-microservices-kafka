import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { ClienteService } from './services/cliente.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/database.module';
import ClienteRepositories from './repositories/cliente-repositories';
import AuthController from './controllers/auth.controller';
import UserServices from './services/user-services';
import UserRepositories from './repositories/user-repositories';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }),
  DbModule
],
  controllers: [AppController, AuthController],
  providers: [
    ClienteService, 
    ClienteRepositories, 
    ClienteService,
    UserServices,
    UserRepositories
  ],
})
export class AppModule {}
