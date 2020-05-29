import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    OneToOne,
    JoinColumn
} from "typeorm";

import { VideoJuegos } from "./Videojuegos";

@Entity()
export class Compra extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => VideoJuegos)
    @JoinColumn()
    VideoJuegos: VideoJuegos;

    @Column({type:"date"})
    fecha: Date;

    @Column({type:"int" , width: 3 })
    licencia: number;
}