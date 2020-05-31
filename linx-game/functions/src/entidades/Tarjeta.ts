import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity
 } from "typeorm";

 export type UserRoleType = "BBVA" | "BANAMEX" | "SANTANDER" | "SCOTIABANK"| "HSBC";

 @Entity()
 export class Tarjeta extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: ["BBVA", "BANAMEX", "SANTANDER", "SCOTIABANK", "HSBC"],
        length: 20
    })
    banco: string;

    @Column({type:"int" , width: 16 })
    numero: number;

    @Column({type:"date"})
    fecha: Date;

    @Column({type:"int" , width: 3 })
    cvv: number;

 }