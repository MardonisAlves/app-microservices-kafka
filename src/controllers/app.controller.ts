import { Controller } from '@nestjs/common';
import {MessagePattern, Payload } from '@nestjs/microservices';
import { createUser } from 'src/interfaces/create.interface';
import { AppService } from 'src/services/app.service';


@Controller()
export class AppController{
  constructor(private appService:AppService){}

  @MessagePattern('create_user')
 async createUser(@Payload() createuser:createUser):Promise<any>{ 
    const veriUser = await this.verificarUser(createuser);
    if(veriUser.length > 0) return {message:'Usuario ja cadastrado'}

    const create = await this.appService.createUser(createuser);
    if(create.length > 0) return {message:'Usuario cadastrado com sucesso'}

  }

@MessagePattern('verificar_user')
async verificarUser(@Payload() email:createUser){
     return await this.appService.verificarUser(email.email);
  }
  
}
