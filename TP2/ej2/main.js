"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var habitacion_1 = require("./habitacion");
var hotel_1 = require("./hotel");
// Crear un hotel y agregar habitaciones
var hotel = new hotel_1.Hotel();
hotel.agregarHabitacion(new habitacion_1.Habitacion(1, "simple"));
hotel.agregarHabitacion(new habitacion_1.Habitacion(2, "doble"));
hotel.agregarHabitacion(new habitacion_1.Habitacion(3, "suite"));
// Hacer reservas
hotel.hacerReserva(hotel.getHabitaciones()[0], "Juan");
hotel.hacerReserva(hotel.getHabitaciones()[1], "Maria");
hotel.hacerReserva(hotel.getHabitaciones()[2], "Pedro");
// Cancelar reservas
hotel.cancelarReserva(hotel.getHabitaciones()[0]);
hotel.cancelarReserva(hotel.getHabitaciones()[1]);
// Verificar habitaciones disponibles
console.log(hotel.getHabitacionesDisponibles());
