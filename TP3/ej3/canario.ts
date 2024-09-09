/**
 * 2-Crear la clase Animal con dos propiedades: nombre y el atributo opcional tipo, con un método “alimentar”
 * Crear 2 clases hijas, Loro , que además contará con un atributo “peso” y la clase Canario.
 * El método alimentar del Loro devolverá un mensaje con la cantidad de alimento que se le debe suminstrar,
 *  el alimento debe ser un 5% del peso del loro., pero si es tipo “Barranquero” el alimento es el 6.5% del peso.
 * El método alimentar del Canario devolverá un mensaje con la cantidad de alimento que se le debe suminstrar,
 *  el alimento debe ser un 15% del peso del canario.  
 */

import { Animal } from './animal';

export class Canario extends Animal {
  peso: number;

  constructor(nombre: string, peso: number) {
    super(nombre);
    this.peso = peso;
  }

  alimentar(): string {
    return `Alimenta al ${this.nombre} con el 15% de su peso`;
  }
}