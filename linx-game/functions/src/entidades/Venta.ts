import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    OneToOne,
    JoinColumn
} from "typeorm";

import { VideoJuegos } from "./Videojuegos";
import { Cliente } from "./Cliente";

@Entity()
export class Venta extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Cliente)
    @JoinColumn()
    Cliente: Cliente;

    @Column({type:"date"})
    fecha: Date;

    @OneToOne(type => VideoJuegos)
    @JoinColumn()
    VideoJuegos: VideoJuegos;
}