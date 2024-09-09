import { Local } from './local';

export interface Vivienda extends Local {
  cantidadHabitaciones: number;
  barrio: string;
}