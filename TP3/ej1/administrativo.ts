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

export class Administrativo extends Persona {
    private edad: number;
    private activo: boolean;

    constructor(nombre: string, apellido: string, correo: string, edad: number, activo: boolean) {
        super(nombre, apellido, correo);
        this.edad = edad;
        this.activo = activo;
    }

    public mostrarMensaje(): void {
        console.log("Soy un Administrativo");
    }

    public getEdad(): number {
        return this.edad;
    }

    public isActivo(): boolean {
        return this.activo;
    }

    public setActivo(activo: boolean): void {
        this.activo = activo;
    }
}