/**
 * 4- Crear una interfaz Inmueble, con las propiedades tipo, metrosCuadrados,
 * dirección y un método sin implementar, llamado “Alquilar”,
 *  que mostrará el precio de alquiler.
 */
import { Inmueble } from './inmueble';

export class Casa implements Inmueble {
  tipo: string;
  metrosCuadrados: number;
  direccion: string;

  constructor(tipo: string, metrosCuadrados: number, direccion: string) {
    this.tipo = tipo;
    this.metrosCuadrados = metrosCuadrados;
    this.direccion = direccion;
  }

  alquilar(): number {
    return this.metrosCuadrados * 2500; //precio alquiler...ponele
  }
}