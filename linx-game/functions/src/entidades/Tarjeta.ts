import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity
 } from "typeorm";

 export type BancoType = "BBVA" | "BANAMEX" | "SANTANDER" | "SCOTIABANK"| "HSBC";

 @Entity()
 export class Tarjeta extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: ["BBVA", "BANAMEX", "SANTANDER", "SCOTIABANK", "HSBC"]
    })
    banco: BancoType;

    @Column({type:"varchar" , width: 16 })
    numero: string;

    @Column({type:"date"})
    fecha: Date;

    @Column({type:"int" , width: 3 })
    cvv: number;

 }