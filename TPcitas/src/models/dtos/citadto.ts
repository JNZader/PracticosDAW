import { IsDate, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { BaseDTO } from "./basedto";

export class CitaDTO extends BaseDTO {

    @IsNotEmpty()
    @IsDate()
    fecha: Date;
 
    @IsString()
    motivo: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    clienteId: number;
  }
  