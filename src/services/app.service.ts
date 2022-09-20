import {  Injectable } from '@nestjs/common';
import { createUser } from 'src/interfaces/create.interface';
import ConnectDb from 'src/db/connectdb';

@Injectable()
export class AppService {
 constructor(private readonly connectdb:ConnectDb){}
 async createUser(createuser:createUser){
    /* chamar o repository */
    /* definir o banco de Dados */
    const con = await this.connectdb.connect();
    console.log(con);

    console.log(createuser);
  }
}
