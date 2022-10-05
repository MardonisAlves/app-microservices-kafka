import { Injectable } from "@nestjs/common";
import { Auth } from "src/interfaces/auth-interface";
import { createUser } from "src/interfaces/create.interface";
import UserRepositories from "src/repositories/user-repositories";

@Injectable()
export default class UserServices {

    constructor(private readonly userRepositories: UserRepositories) { }

    async cadastroUser(cadastro: createUser) {
        return await this.userRepositories.cadastroUSer(cadastro);
    }

    async getUser(auth: Auth) {
        return await this.userRepositories.getUser(auth);
    }
}