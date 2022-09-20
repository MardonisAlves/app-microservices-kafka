import { Injectable } from "@nestjs/common";
import { Client, Pool } from 'pg'
@Injectable()
export default class ConnectDb {
    async connect() {
        const db = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: 'postgres',
            port: 5432,
        })
    return db;
    }
}