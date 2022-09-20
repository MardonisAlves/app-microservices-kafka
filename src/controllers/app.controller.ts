import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';
import { createUser } from 'src/interfaces/create.interface';
import { AppService } from 'src/services/app.service';


@Controller()
export class AppController{
  constructor(private appService:AppService){}
  @EventPattern('create_user')
  createUser(@Payload() createuser:createUser, @Ctx() context:KafkaContext){ 
   return this.appService.createUser(createuser);
  }
  
}
