import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    OneToMany
 } from "typeorm";
 import { Videojuegos } from "./Videojuegos";

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

    @OneToMany(type => Videojuegos, videojuegos => videojuegos.id)
    videojuegos: Videojuegos[];
    
 }