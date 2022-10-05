import {  Injectable } from '@nestjs/common';
import { createUser } from 'src/interfaces/create.interface';
import ClienteRepositories from 'src/repositories/cliente-repositories';


@Injectable()
export class ClienteService {
constructor(private readonly clienteRepositories:ClienteRepositories){}
 async createUser(createuser:createUser){
    try {
      const create = await this.clienteRepositories.createUser(createuser);
      return create;
    } catch (error) {
      console.log(error);
    }
  }

  async verificarUser(email:string){
    try {
     const verifiUser = await this.clienteRepositories.verificarUser(email); 
     return verifiUser;
    } catch (error) {
      console.log(error);
    }
  }

async deleteUser(id:string){
  try {
    const deleteUser = await this.clienteRepositories.deleteUser(id);
    return deleteUser;
  } catch (error) {
    console.log(error);
    
  }
}

async updatUser(user:createUser){
  try {
   const updateUser = await this.clienteRepositories.updateUser(user);
   return updateUser;
  } catch (error) {
    console.log(error);
  }
}

async allUsers(){
  try {
    const allusers = await this.clienteRepositories.allUsers();
    return allusers;
  } catch (error) {
   console.log(error);
  }
}
}
