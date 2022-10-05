import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { Auth } from "src/interfaces/auth-interface";
import { createUser } from "src/interfaces/create.interface";
import UserServices from "src/services/user-services";

@Controller()
export default class AuthController{
    constructor(
      private readonly userServices:UserServices
      ){}
      
    @MessagePattern('auth_login')
    async authLogin(@Payload() auth:Auth){       
      return await this.userServices.getUser(auth)
    }

    @MessagePattern('cadastro_user')
    async cadastroUser(@Payload() cadastro:createUser){
      return await this.userServices.cadastroUser(cadastro);
    }
}