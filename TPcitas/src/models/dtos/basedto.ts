import { IsNumber, IsBoolean, IsPositive, IsOptional } from 'class-validator';

export class BaseDTO {
  
  @IsOptional()
  @IsNumber()
  @IsPositive()
  id: number;

  @IsBoolean()
  estado: boolean = true;

}