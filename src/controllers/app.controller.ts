import { Controller } from '@nestjs/common';
import {MessagePattern, Payload } from '@nestjs/microservices';
import { createUser } from 'src/interfaces/create.interface';
import { ClienteService } from 'src/services/cliente.service';


@Controller()
export class AppController{
  constructor(private clienteService:ClienteService){}

  @MessagePattern('create_user')
 async createUser(@Payload() createuser:createUser):Promise<any>{ 

    const veriUser = await this.verificarUser(createuser);
    if(veriUser.length > 0) return {message:'Usuario ja cadastrado'}

    const create = await this.clienteService.createUser(createuser);
    if(create.length > 0) return {message:'Usuario cadastrado com sucesso'}

  }

@MessagePattern('verificar_user')
async verificarUser(@Payload() email:createUser){
     return await this.clienteService.verificarUser(email.email);
  }
@MessagePattern('delete_user')
async deleteUser(@Payload() id:string){
  const deleteUser= await this.clienteService.deleteUser(id);
  if(deleteUser.length > 0){
    return {message:'Usuario deletado com sucesso'}
  }else{
    return {message: 'Usuario não encontrado'}
  }
  }

  @MessagePattern('update_user')
  async updateUser(@Payload() user:any){
    return this.clienteService.updatUser(user)
  }

  @MessagePattern('all_users')
  async allUsers(){
   return await this.clienteService.allUsers();
  }
  
}
