import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport , MicroserviceOptions} from '@nestjs/microservices'
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
     
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'test',
          brokers: [process.env.HOST_BROUKER],
        },
         consumer:{
          groupId: 'test-consumer',
          allowAutoTopicCreation:true
         }
    }
  }
    );
  await app.listen();
}
bootstrap();
