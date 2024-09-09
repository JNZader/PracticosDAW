/**
 * 2. Sistema de Reservas de Hotel
 * Desarrolla un sistema para gestionar las reservas en un hotel. 
 * Cada habitación tiene un número, tipo (simple, doble, suite), y disponibilidad. 
 * Los clientes pueden hacer reservas, y el sistema debe verificar la disponibilidad antes de confirmar la reserva.
 * Requisitos:
 * •	Crear una clase Habitacion con propiedades como numero, tipo, y disponible.
 * •	Crear una clase Hotel que tenga un arreglo de habitaciones y métodos para hacer reservas y cancelar reservas.
 * •	Implementar un método que devuelva una lista de habitaciones disponibles.
 */
import { Habitacion } from "./habitacion";

export class Hotel {
    private habitaciones: Habitacion[];

    constructor() {
        this.habitaciones = [];
    }

    public getHabitaciones(): Habitacion[] {
        return this.habitaciones;
    }

    public agregarHabitacion(habitacion: Habitacion): void {
        this.habitaciones.push(habitacion);
    }

    public getHabitacionesDisponibles(): Habitacion[] {
        return this.habitaciones.filter(habitacion => habitacion.isDisponible());
    }

    public hacerReserva(habitacion: Habitacion, cliente: string): void {
        if (habitacion.isDisponible()) {
            habitacion.setDisponible(false);
            console.log(`Reserva confirmada para la habitación ${habitacion.getNumero()} para el cliente ${cliente}`);
        } else {
            console.log(`La habitación ${habitacion.getNumero()} no está disponible`);
        }
    }

    public cancelarReserva(habitacion: Habitacion): void {
        habitacion.setDisponible(true);
        console.log(`Reserva cancelada para la habitación ${habitacion.getNumero()}`);
    }
}