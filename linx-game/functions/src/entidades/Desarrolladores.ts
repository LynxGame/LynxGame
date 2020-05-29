import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity
 } from "typeorm";

 @Entity()
 export class Desarrolladores extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 40 })
    nombre:  string;
    
    @Column("varchar", { length: 30 })
    email:  string;

    @Column("int")
    convenio: number;
    
 }