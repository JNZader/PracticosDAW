import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Cita } from "./cita";

@Entity()
export class Cliente extends BaseEntity {

    @Column({ name: 'nombre', type: "varchar", length: 100})
    nombre:string;

    @Column({ name: 'apellido',type: "varchar", length: 100})
    apellido:string;

    @Column({ name: 'email',type: "varchar", length: 150, unique: true})
    email:string;

    @Column({ name: 'telefono',type: "varchar", length: 20, nullable: true})
    telefono:string;

    @OneToMany(() => Cita, cita => cita.cliente)
    citas: Cita[];
}
