import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity
} from "typeorm";

@Entity()
export class Direccion extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"int" , width: 5 })
    CP: number;

    @Column("varchar", { length: 50 })
    calle: string;

    @Column("varchar", { length: 10 })
    numero: number;

    @Column("varchar", { length: 30 })
    ciudad: string;
}