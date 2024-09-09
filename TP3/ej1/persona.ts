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
export abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected correo: string;

    constructor(nombre: string, apellido: string, correo: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }

    abstract mostrarMensaje(): void;

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getCorreo(): string {
        return this.correo;
    }

    public setCorreo(correo: string): void {
        this.correo = correo;
    }
}