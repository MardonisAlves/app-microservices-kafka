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

  async verificarUser(email:string){
    try {
     const verifiUser = await this.usersRepositories.verificarUser(email); 
     return verifiUser;
    } catch (error) {
      console.log(error);
    }
  }

async deleteUser(id:string){
  try {
    const deleteUser = await this.usersRepositories.deleteUser(id);
    return deleteUser;
  } catch (error) {
    console.log(error);
    
  }
}

async updatUser(user:createUser){
  try {
   const updateUser = await this.usersRepositories.updateUser(user);
   return updateUser;
  } catch (error) {
    console.log(error);
  }
}

async allUsers(){
  try {
    const allusers = await this.usersRepositories.allUsers();
    return allusers;
  } catch (error) {
   console.log(error);
  }
}
}
