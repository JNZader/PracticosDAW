import { Habitacion } from "./habitacion";
import { Hotel } from "./hotel";

// Crear un hotel y agregar habitaciones
const hotel = new Hotel();
hotel.agregarHabitacion(new Habitacion(1, "simple"));
hotel.agregarHabitacion(new Habitacion(2, "doble"));
hotel.agregarHabitacion(new Habitacion(3, "suite"));

// Hacer reservas
hotel.hacerReserva(hotel.getHabitaciones()[0], "Juan");
hotel.hacerReserva(hotel.getHabitaciones()[1], "Maria");
hotel.hacerReserva(hotel.getHabitaciones()[2], "Pedro");

// Cancelar reservas
hotel.cancelarReserva(hotel.getHabitaciones()[0]);
hotel.cancelarReserva(hotel.getHabitaciones()[1]);

// Verificar habitaciones disponibles
console.log(hotel.getHabitacionesDisponibles());