import { Casa } from "./casa";

const miCasa = new Casa("Casa", 120, "Calle Ejemplo 123");

console.log(`Tipo: ${miCasa.tipo}`);
console.log(`Metros cuadrados: ${miCasa.metrosCuadrados}`);
console.log(`Dirección: ${miCasa.direccion}`);

const precioAlquiler = miCasa.alquilar();
console.log(`Precio de alquiler: $${precioAlquiler}`); 