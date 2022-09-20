import { Module } from "@nestjs/common";
import ConnectDb from "./connectdb";

@Module({
    imports:[],
    providers:[ConnectDb],
    exports:[ConnectDb]
})

export class DbModule{}