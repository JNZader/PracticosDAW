"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
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
var Producto = /** @class */ (function () {
    function Producto(nombre, codigo, precio, cantidad) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    Producto.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Producto.prototype.setCantidad = function (cantidad) {
        this.cantidad = cantidad;
    };
    return Producto;
}());
exports.Producto = Producto;
