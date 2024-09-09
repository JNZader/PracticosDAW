/**
 * 4- Crear una interfaz Inmueble, con las propiedades tipo, metrosCuadrados,
 * dirección y un método sin implementar, llamado “Alquilar”,
 *  que mostrará el precio de alquiler.
 */
export interface Inmueble {
    tipo: string;
    metrosCuadrados: number;
    direccion: string;
    alquilar(): number;
  }