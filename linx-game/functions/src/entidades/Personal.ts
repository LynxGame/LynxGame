import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    OneToOne,
    JoinColumn
} from "typeorm";
import { direccion } from './Direccion';

@Entity()
export class personal extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 25 })
    nombre: string;

    @Column("varchar", { length: 25 })
    apellidos: string;

    @Column({type:"int" , width: 10 })
    telefono: number;

    @Column("int")
    salario: number;

    @Column("varchar", { length: 20 })
    password: string;

    @OneToOne(type => direccion)
    @JoinColumn()
    direccion: direccion;
}