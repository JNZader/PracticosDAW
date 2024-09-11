import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Cliente } from "../entities/cliente";

@Entity({name:"citas"})
export class Cita extends BaseEntity {

    @Column({ type: "datetime" })
    fecha: Date;
  
    @Column({ type: "varchar", length: 255 })
    motivo: string;
  
    @ManyToOne(() => Cliente, (cliente) => cliente.citas, { onDelete: "CASCADE" })
    cliente: Cliente;
  }
