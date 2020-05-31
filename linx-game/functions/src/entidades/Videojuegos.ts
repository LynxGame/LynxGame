import {
   Entity,
   PrimaryGeneratedColumn, 
   Column, 
   BaseEntity,
   OneToOne,
   JoinColumn,
   ManyToOne
} from "typeorm";

import { Genero } from "./Genero";
import { Desarrolladores } from "./Desarrolladores";
import { Precio } from "./Precio";
import { Media } from "./Media";

@Entity()
export class Videojuegos extends BaseEntity {
   
   @PrimaryGeneratedColumn()
   id: number;

   @Column("varchar", { length: 50 })
   nombre: string;

   @Column("varchar", { length: 250 })
   descripcion: string;

   @Column({type:"date"})
   fecha: Date;

   @Column("varchar", { length: 2 })
   clasificion: string;

   @ManyToOne(type => Genero, genero => genero.id)
   genero: Genero;

   @ManyToOne(type => Desarrolladores, desarrolladores => desarrolladores.id)
   desarrolladores: Desarrolladores;

   @ManyToOne(type => Precio, precio => precio.id)
   precio: Precio;

   @OneToOne(type => Media)
   @JoinColumn()
   Media: Media;
}