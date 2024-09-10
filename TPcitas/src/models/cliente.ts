import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Cita } from "./cita";
import { IsNotEmpty, IsEmail, IsString, IsPhoneNumber } from 'class-validator';

@Entity()
export class Cliente extends BaseEntity {


    @Column({ name: 'nombre'})
    @IsNotEmpty()
    @IsString()
    private _nombre:string;

    @Column({ name: 'apellido'})
    @IsNotEmpty()
    @IsString()
    private _apellido:string;

    @Column({ name: 'email'})
    @IsNotEmpty()
    @IsEmail()
    private _email:string;

    @Column({ name: 'telefono'})
    @IsNotEmpty()
    @IsString()
    @IsPhoneNumber('ES')
    private _telefono:string;

    @OneToMany(() => Cita, cita => cita.cliente)
    citas: Cita[];
}
