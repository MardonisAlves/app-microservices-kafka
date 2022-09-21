import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, KafkaContext, KafkaRetriableException, Payload } from '@nestjs/microservices';
import { createUser } from 'src/interfaces/create.interface';
import { AppService } from 'src/services/app.service';


@Controller()
export class AppController{
  constructor(private appService:AppService){}
  @EventPattern('create_user')
 async createUser(@Payload() createuser:createUser, @Ctx() context:KafkaContext){ 
  try {
    const create = await this.appService.createUser(createuser);
    return create;
  } catch (error) {
    throw new KafkaRetriableException(error)
  }
  }
  
}
