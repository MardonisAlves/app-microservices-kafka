import { Injectable } from "@nestjs/common";
import ConnectDb from "src/db/connectdb";
import { createUser } from "src/interfaces/create.interface";

@Injectable()
export default class UsersRepositories{
constructor(private readonly connectdb:ConnectDb){}

    async createUser(createuser:createUser){
        try {
            const con = await this.connectdb.connect();
            const sqlquery = `INSERT INTO users(first_name, email, last_name, phone)VALUES($1, $2, $3, $4) RETURNING *`;
            const bind =  [createuser.first_name, createuser.email, createuser.last_name, createuser.phone];
            const res = await con.query(sqlquery, bind);
            await con.end();
            return res.rows;
          } catch (error) {
            console.log(error);
          }
    }
}