import {
   Entity,
   PrimaryGeneratedColumn, 
   Column, 
   BaseEntity,
   OneToOne,
   JoinColumn
} from "typeorm";

import { Genero } from "./Genero";
import { Desarrolladores } from "./Desarrolladores";
import { Precio } from "./Precio";
import { Media } from "./Media";

@Entity()
export class VideoJuegos extends BaseEntity {
   
   @PrimaryGeneratedColumn()
   id: number;

   @OneToOne(type => Genero)
   @JoinColumn()
   Genero: Genero;

   @Column("varchar", { length: 50 })
   nombre: string;

   @Column("varchar", { length: 250 })
   descripcion: string;

   @OneToOne(type => Desarrolladores)
   @JoinColumn()
   Desarrolladores: Desarrolladores;

   @Column({type:"date"})
   fecha: Date;

   @Column("varchar", { length: 2 })
   clasificion: string;

   @OneToOne(type => Precio)
   @JoinColumn()
   Precio: Precio;

   @OneToOne(type => Media)
   @JoinColumn()
   Media: Media;
}