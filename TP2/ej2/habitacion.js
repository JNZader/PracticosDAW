"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habitacion = void 0;
var Habitacion = /** @class */ (function () {
    function Habitacion(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo;
        this.disponible = true;
    }
    Habitacion.prototype.getNumero = function () {
        return this.numero;
    };
    Habitacion.prototype.getTipo = function () {
        return this.tipo;
    };
    Habitacion.prototype.isDisponible = function () {
        return this.disponible;
    };
    Habitacion.prototype.setDisponible = function (disponible) {
        this.disponible = disponible;
    };
    return Habitacion;
}());
exports.Habitacion = Habitacion;
