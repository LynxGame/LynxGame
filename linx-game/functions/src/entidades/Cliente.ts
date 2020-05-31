import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    OneToOne,
    JoinColumn,
    OneToMany
} from "typeorm";
import { Tarjeta } from './Tarjeta';
import { Venta } from './Venta';

@Entity()
export class Cliente extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 25 })
    nombre: string;

    @Column("varchar", { length: 25 })
    apellidos: string;

    @Column("varchar", { length: 15 })
    username: string;

    @Column("varchar", { length: 30 })
    email: string;

    @Column({type:"int" , width: 2 })
    edad: number;

    @Column("varchar", { length: 10 })
    password: string;

    @Column({type:'decimal', precision: 7, scale: 2, default: 0,})
    creditos: number;

    @Column("varchar", { length: 30 })
    calle: string;

    @Column({type:'decimal', precision: 5, scale: 0, default: 0,})
    cp: number;

    @Column({type:"int" , width: 3 })
    numero: number;

    @Column("varchar", { length: 20 })
    ciudad: string;
    
    @OneToOne(type => Tarjeta)
    @JoinColumn()
    Tarjeta: Tarjeta;

    @OneToMany( type => Venta , venta => venta.id)
    venta: Venta[];
}

/*
@Trigger({
    name: "DisparadorEdad",
    fires: "before",
    insert: true,
    update: true
})

export class UserDateUpdater {

    getSql() {
        return `
BEGIN
	...
END
`;
    }

}*/