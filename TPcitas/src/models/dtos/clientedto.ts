import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { BaseDTO } from "./basedto";

export class ClienteDTO extends BaseDTO {

    @IsNotEmpty()
    @IsString()
    nombre: string;
  
    @IsNotEmpty()
    @IsString()
    apellido: string;
  
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsOptional()
    @IsPhoneNumber('ES', { message: 'Número de teléfono no válido' })
    telefono:string;
  }