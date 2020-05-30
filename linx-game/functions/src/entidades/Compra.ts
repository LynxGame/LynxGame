import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    OneToOne,
    JoinColumn
} from "typeorm";

import { Videojuegos } from "./Videojuegos";

@Entity()
export class Compra extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Videojuegos)
    @JoinColumn()
    VideoJuegos: Videojuegos;

    @Column({type:"date"})
    fecha: Date;

    @Column({type:"int" , width: 3 })
    licencia: number;
}