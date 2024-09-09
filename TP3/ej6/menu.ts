import { Postre } from './postre';

export class Menu implements Postre {
  entrada: string;
  platoPrincipal: string;
  costo: number;

  constructor(entrada: string, platoPrincipal: string, costo: number) {
    this.entrada = entrada;
    this.platoPrincipal = platoPrincipal;
    this.costo = costo;
  }

  nombre: string = "Menu Degustación";
  precio: number = 30;

  mostrarPrecio(): void {
    const descuento = this.precio * 0.15;
    console.log(`Precio con descuento: $${this.precio - descuento}`);
  }
}