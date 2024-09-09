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
export class Producto {
    private nombre: string;
    private codigo: string;
    private precio: number;
    private cantidad: number;

    constructor(nombre: string, codigo: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public setCantidad(cantidad: number): void {
        this.cantidad = cantidad;
    }
}