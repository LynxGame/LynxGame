import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    OneToMany
 } from "typeorm";
 import { Videojuegos } from "./Videojuegos";

 @Entity()
 export class Genero extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 30 })
    nombre:  string;

    @OneToMany(type => Videojuegos, videojuegos => videojuegos.id)
    videojuegos: Videojuegos[];
    
 }