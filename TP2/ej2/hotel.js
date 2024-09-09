"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
var Hotel = /** @class */ (function () {
    function Hotel() {
        this.habitaciones = [];
    }
    Hotel.prototype.getHabitaciones = function () {
        return this.habitaciones;
    };
    Hotel.prototype.agregarHabitacion = function (habitacion) {
        this.habitaciones.push(habitacion);
    };
    Hotel.prototype.getHabitacionesDisponibles = function () {
        return this.habitaciones.filter(function (habitacion) { return habitacion.isDisponible(); });
    };
    Hotel.prototype.hacerReserva = function (habitacion, cliente) {
        if (habitacion.isDisponible()) {
            habitacion.setDisponible(false);
            console.log("Reserva confirmada para la habitaci\u00F3n ".concat(habitacion.getNumero(), " para el cliente ").concat(cliente));
        }
        else {
            console.log("La habitaci\u00F3n ".concat(habitacion.getNumero(), " no est\u00E1 disponible"));
        }
    };
    Hotel.prototype.cancelarReserva = function (habitacion) {
        habitacion.setDisponible(true);
        console.log("Reserva cancelada para la habitaci\u00F3n ".concat(habitacion.getNumero()));
    };
    return Hotel;
}());
exports.Hotel = Hotel;
