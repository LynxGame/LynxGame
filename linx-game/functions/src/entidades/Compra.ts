import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    ManyToOne,
} from "typeorm";

import { Videojuegos } from "./Videojuegos";

@Entity()
export class Compra extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"date"})
    fecha: Date;

    @Column({type:"int" , width: 3 })
    licencia: number;

    @ManyToOne(type => Videojuegos, videojuegos => videojuegos.id)
    videojuegos: Videojuegos;
}