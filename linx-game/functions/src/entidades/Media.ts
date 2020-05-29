import {
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity
 } from "typeorm";

 @Entity()
 export class Media extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 300 })
    baner1: string;

    @Column("varchar", { length: 300 })
    baner2: string;

    @Column("varchar", { length: 300 })
    baner3: string;

    @Column("varchar", { length: 300 })
    preview: string;

    @Column("varchar", { length: 150 })
    trailer: string;

 }