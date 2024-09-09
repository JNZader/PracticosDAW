import { Menu } from './menu';

const miMenu = new Menu("Ensalada Mixta", "Filete con Papas", 25);

console.log(`Entrada: ${miMenu.entrada}`);
console.log(`Plato principal: ${miMenu.platoPrincipal}`);
console.log(`Costo total: $${miMenu.costo}`);

miMenu.mostrarPrecio(); 