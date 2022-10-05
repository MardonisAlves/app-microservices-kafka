import { Injectable } from "@nestjs/common";
import ConnectDb from "src/db/connectdb";
import { createUser } from "src/interfaces/create.interface";

@Injectable()
export default class ClienteRepositories {
  constructor(private readonly connectdb: ConnectDb) { }

  async createUser(createuser: createUser) {
    try {
      const con = await this.connectdb.connect();
      const sqlquery = `INSERT INTO clientes(first_name, email, last_name, phone)VALUES($1, $2, $3, $4) RETURNING *`;
      const bind = [createuser.first_name, createuser.email, createuser.last_name, createuser.phone];
      const res = await con.query(sqlquery, bind);
      await con.end();
      return res.rows;
    } catch (error) {
      console.log(error);
    }
  }
  async verificarUser(email: string) {
    try {
      const con = await this.connectdb.connect();
      const veriUser = `SELECT * FROM clientes where email= $1`;
      const bind = [email];
      const res = await con.query(veriUser, bind);
      await con.end()
      return res.rows;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(id: string) {
    try {
      const con = await this.connectdb.connect();
      const deleteUser = `DELETE FROM clientes where user_id = $1 RETURNING user_id`;
      const bind = [id];
      const res = await con.query(deleteUser, bind);
      return res.rows;
    } catch (error) {
      console.log(error);

    }
  }

  async updateUser(user:createUser) {
    try {
      const con = await this.connectdb.connect();
      const bind = [user.first_name, user.last_name, user.email, user.phone, user.id]
      const update = `
      UPDATE  clientes 
      set first_name= $1, last_name= $2, email= $3, phone= $4 where user_id = $5 RETURNING user_id`;
      const res = await con.query(update, bind);
      return {
        message:'Usuario atualizado com sucesso!'
      };
    } catch (error) {
      console.log(error);
    }
  }


  async allUsers(){
    try {
      const con = await this.connectdb.connect();
      const allUser = `SELECT * FROM clientes`;
      const res = await con.query(allUser);
      return res.rows;
    } catch (error) {
      console.log(error);
    }
  }
}