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

export class Habitacion {
    private numero: number;
    private tipo: string;
    private disponible: boolean;

    constructor(numero: number, tipo: string) {
        this.numero = numero;
        this.tipo = tipo;
        this.disponible = true;
    }

    public getNumero(): number {
        return this.numero;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public isDisponible(): boolean {
        return this.disponible;
    }

    public setDisponible(disponible: boolean): void {
        this.disponible = disponible;
    }
}