import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    ManyToOne,
} from "typeorm";

import { Videojuegos } from "./Videojuegos";
import { Cliente } from "./Cliente";

@Entity()
export class Venta extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"date"})
    fecha: Date;
    
    @ManyToOne(type => Cliente, cliente => cliente.id)
    cliente: Cliente;

    @ManyToOne(type => Videojuegos, videojuegos => videojuegos.id)
    videojuegos: Videojuegos;
}