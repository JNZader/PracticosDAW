"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = void 0;
var Inventario = /** @class */ (function () {
    function Inventario() {
        this.productos = [];
    }
    Inventario.prototype.agregarProducto = function (producto) {
        this.productos.push(producto);
    };
    Inventario.prototype.venderProducto = function (codigo, cantidad) {
        for (var i = 0; i < this.productos.length; i++) {
            if (this.productos[i].getCodigo() === codigo) {
                if (this.productos[i].getCantidad() >= cantidad) {
                    this.productos[i].setCantidad(this.productos[i].getCantidad() - cantidad);
                    console.log("Se vendieron ".concat(cantidad, " unidades de ").concat(this.productos[i].getNombre()));
                }
                else {
                    console.log("No hay suficientes unidades de ".concat(this.productos[i].getNombre(), " para vender"));
                }
                return;
            }
        }
        console.log("No se encontr\u00F3 el producto con c\u00F3digo ".concat(codigo));
    };
    Inventario.prototype.verificarStock = function (umbral) {
        var productosBajoUmbral = this.productos.filter(function (p) { return p.getCantidad() < umbral; });
        console.log("Productos con cantidades menores a ".concat(umbral, ":"));
        productosBajoUmbral.forEach(function (p) { return console.log("".concat(p.getNombre(), " - ").concat(p.getCantidad())); });
    };
    Inventario.prototype.mostrarInventario = function () {
        console.log("Inventario:");
        this.productos.forEach(function (p) { return console.log("".concat(p.getNombre(), " - ").concat(p.getCodigo(), " - ").concat(p.getPrecio(), " - ").concat(p.getCantidad())); });
    };
    return Inventario;
}());
exports.Inventario = Inventario;
