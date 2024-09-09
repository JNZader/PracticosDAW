import { Local} from './local';
import { Vivienda } from './vivienda';

const miLocal: Local = {
  metrosCuadrados: 50,
  direccion: "Calle Principal 10",
};

const miVivienda: Vivienda = {
  metrosCuadrados: 120,
  direccion: "Calle Ejemplo 123",
  cantidadHabitaciones: 3,
  barrio: "Centro",
};

console.log("Local:");
console.log(`Metros cuadrados: ${miLocal.metrosCuadrados}`);
console.log(`Dirección: ${miLocal.direccion}`);

console.log("\nVivienda:");
console.log(`Metros cuadrados: ${miVivienda.metrosCuadrados}`);
console.log(`Dirección: ${miVivienda.direccion}`);
console.log(`Cantidad de habitaciones: ${miVivienda.cantidadHabitaciones}`);
console.log(`Barrio: ${miVivienda.barrio}`);