import { Inventario } from "./inventario";
import { Producto } from "./producto";

// Crear un inventario y agregar productos
var inventario = new Inventario();
var producto1 = new Producto('Camisa', 'C001', 20, 100);
var producto2 = new Producto('Pantalón', 'P002', 30, 50);
var producto3 = new Producto('Zapato', 'Z003', 40, 20);

inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);

// Mostrar inventario
inventario.mostrarInventario();

// Vender productos
inventario.venderProducto('C001', 10);
inventario.venderProducto('P002', 20);
inventario.venderProducto('Z003', 5);

// Verificar stock
inventario.verificarStock(30);