import { Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Cliente } from "./cliente";
import { IsNotEmpty, IsDate, IsPast, IsString } from 'class-validator';


@Entity()
export class Cita extends BaseEntity {

    @IsNotEmpty()
    @IsDate()
    @IsPast()
    private fecha:Date;

    @IsNotEmpty()
    @IsString()
    private motivo:string;

    @ManyToOne(() => Cliente, cliente => cliente.citas)
    cliente: Cliente;
  

}
