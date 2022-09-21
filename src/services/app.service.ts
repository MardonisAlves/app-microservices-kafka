import {  Injectable } from '@nestjs/common';
import { createUser } from 'src/interfaces/create.interface';
import UsersRepositories from 'src/repositories/user-repositories';


@Injectable()
export class AppService {
constructor(private readonly usersRepositories:UsersRepositories){}
 async createUser(createuser:createUser){
    try {
      const create = await this.usersRepositories.createUser(createuser);
      return create;
    } catch (error) {
      console.log(error);
    }
  }
}
