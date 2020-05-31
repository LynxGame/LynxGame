import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    OneToMany,
 } from "typeorm";
import { Videojuegos } from "./Videojuegos";

 @Entity()
 export class Precio extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'decimal', precision: 6, scale: 2, default: 0,})
    regular: number;
    
    @Column({type:'decimal', precision: 6, scale: 2, default: 0,})
    descuento: number;

    @Column({type:'decimal', precision: 6, scale: 2, default: 0,})
    apartado: number;
    
    @OneToMany(type=>Videojuegos,videojuegos=>videojuegos.Precio)
    videojuego: Videojuegos;
}

 