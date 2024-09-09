/**
 * 3-Crear la clase Figura, A partir del ejercicio anterior "1-Rectángulo.ts"
 *  deberá sacar 2 clases con dos propiedades: base y altura (similar al ejercicio anterior)
 * Crear 2 clases hijas, “Rectángulo” y un “Triangulo” también con dos propiedades: base y altura
 *  ambas clases tendrán el método “calcularArea”.
 * La clase “Rectangulo” además contendrá el método “calcularPerimetro” 
 */

import { Figura } from './figura';
import { Rectangulo } from './rectangulo';


export class Triangulo extends Figura {
  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

const rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.calcularArea()); 
console.log(rectangulo.calcularPerimetro());

const triangulo = new Triangulo(5, 10);
console.log(triangulo.calcularArea());