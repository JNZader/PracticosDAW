/**
 * 2-Crear la clase Animal con dos propiedades: nombre y el atributo opcional tipo, con un método “alimentar”
 * Crear 2 clases hijas, Loro , que además contará con un atributo “peso” y la clase Canario.
 * El método alimentar del Loro devolverá un mensaje con la cantidad de alimento que se le debe suminstrar,
 *  el alimento debe ser un 5% del peso del loro., pero si es tipo “Barranquero” el alimento es el 6.5% del peso.
 * El método alimentar del Canario devolverá un mensaje con la cantidad de alimento que se le debe suminstrar,
 *  el alimento debe ser un 15% del peso del canario.  
 */
import { Loro } from './loro';
import { Canario } from './canario';
import { Animal } from './animal';

const loro1 = new Loro("Polly", 300, "Barranquero");
const loro2 = new Loro("Lora", 250);
const canario = new Canario("Piolín", 30);

console.log(loro1.alimentar());
console.log(loro2.alimentar());
console.log(canario.alimentar());