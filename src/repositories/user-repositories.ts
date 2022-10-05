import { Injectable } from "@nestjs/common";
import ConnectDb from "src/db/connectdb";
import { Auth } from "src/interfaces/auth-interface";
import { createUser } from "src/interfaces/create.interface";
@Injectable()
export default class UserRepositories{
    constructor(private readonly db:ConnectDb){}

    async cadastroUSer(cadastro:createUser){
     try {
        const con = await this.db.connect();
        const bind = [cadastro.email, cadastro.senha]
        const sql = `insert into users(email, senha) values ($1, $2) RETURNING *`;
        const sqlRes = await con.query(sql, bind);
        if(sqlRes.rows.length != 0){
          return {message:'Usuário cadastrado com sucesso!'}
        }else{
          return []
        }
     } catch (error) {
       console.log(error);
     }   
    }

    async getUser(email:Auth){
      try {
        const con = await this.db.connect();
        const sql =  `select * from users where email = $1`;
        const bind = [email.email]
        const sqlRes = await con.query(sql, bind);        
        return sqlRes.rows;
      } catch (error) {
        console.log(error);
      }
    }
}