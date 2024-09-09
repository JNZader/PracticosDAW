/**
 * 
 * 2-Crear la clase Rectángulo con dos propiedades: base y altura,
 *  un método “área” (que devolverá el área del rectángulo) 
 *  
 */
class Rectangulo {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
    }
  
    area(): number {
      return this.base * this.altura;
    }
  }