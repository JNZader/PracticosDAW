import { PrimaryGeneratedColumn, Column } from "typeorm";

export abstract class BaseEntity {
    
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'estado', type: 'boolean' })
    estado: Boolean;

}