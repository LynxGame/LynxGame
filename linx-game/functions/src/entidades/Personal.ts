import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    OneToOne,
    JoinColumn
} from "typeorm";
import { Direccion } from './Direccion';

@Entity()
export class Personal extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 25 })
    nombre: string;

    @Column("varchar", { length: 25 })
    apellidos: string;

    @Column({type:"int" , width: 10 })
    telefono: number;

    @Column({type:'decimal', precision: 7, scale: 2, default: 0,})
    salario: number;

    @Column("varchar", { length: 20 })
    password: string;
}