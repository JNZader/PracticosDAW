/**
 * 4. Sistema de Inventario de Tienda
 * Desarrolla un sistema para gestionar el inventario de una tienda. 
 * Cada producto tiene un nombre, código, precio, y cantidad en stock. 
 * La tienda debe poder añadir productos al inventario, vender productos, y verificar el stock disponible.
 * Requisitos:
 * •	Crear una clase Producto con propiedades como nombre, codigo, precio, y cantidad.
 * •	Crear una clase Inventario que tenga un arreglo de productos y métodos para añadir productos,
 * vender productos, y verificar stock.
 * •	Implementar un método que muestre la lista de productos con cantidades menores a un umbral dado (para reordenar).
 */
import { Producto } from "./producto";

export class Inventario {
    private productos: Producto[];

    constructor() {
        this.productos = [];
    }

    public agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }

    public venderProducto(codigo: string, cantidad: number): void {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].getCodigo() === codigo) {
                if (this.productos[i].getCantidad() >= cantidad) {
                    this.productos[i].setCantidad(this.productos[i].getCantidad() - cantidad);
                    console.log(`Se vendieron ${cantidad} unidades de ${this.productos[i].getNombre()}`);
                } else {
                    console.log(`No hay suficientes unidades de ${this.productos[i].getNombre()} para vender`);
                }
                return;
            }
        }
        console.log(`No se encontró el producto con código ${codigo}`);
    }

    public verificarStock(umbral: number): void {
        const productosBajoUmbral = this.productos.filter(p => p.getCantidad() < umbral);
        console.log(`Productos con cantidades menores a ${umbral}:`);
        productosBajoUmbral.forEach(p => console.log(`${p.getNombre()} - ${p.getCantidad()}`));
    }

    public mostrarInventario(): void {
        console.log("Inventario:");
        this.productos.forEach(p => console.log(`${p.getNombre()} - ${p.getCodigo()} - ${p.getPrecio()} - ${p.getCantidad()}`));
    }
}