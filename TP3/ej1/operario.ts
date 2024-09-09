/**
 * 1-Crear una clase Persona  con las siguientes propiedades nombre, apellido, correo.
 * Además contará con el método “mostrarMensaje”
 * Crear 2 clases hijas 
 * 
 * Clase Administrativo con los atributos:  edad (dato numérico), activo (dato del tipo true/false),
 *   el método “mostrarMensaje” mostrará por consola el mensaje “soy un Administrativo”
 * Crear una clase Operario con el atributo “área”  el método “mostrarMensaje”
 *  mostrará por consola el mensaje “soy un Operario”
 * 
 * Instanciar un objeto y luego compilar el typescript a js.
 * 
 */
import { Persona } from './persona';

export class Operario extends Persona {
    private area: string;

    constructor(nombre: string, apellido: string, correo: string, area: string) {
        super(nombre, apellido, correo);
        this.area = area;
    }

    public mostrarMensaje(): void {
        console.log("Soy un Operario");
    }

    public getArea(): string {
        return this.area;
    }

    public setArea(area: string): void {
        this.area = area;
    }
}