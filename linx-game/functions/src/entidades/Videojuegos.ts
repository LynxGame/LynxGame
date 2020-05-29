import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity
 } from "typeorm";

 @Entity()
 export class Videojuegos extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 25 })
    nombre:  string;

 }
