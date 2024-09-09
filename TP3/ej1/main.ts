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
import { Administrativo } from './administrativo';
import { Operario } from './operario';
import { Persona } from './persona';

const admin = new Administrativo("Juan", "Pérez", "juan@example.com", 30, true);
admin.mostrarMensaje();
console.log(admin.getNombre(), admin.getApellido(), admin.getEdad(), admin.isActivo());

const operario = new Operario("María", "García", "maria@example.com", "Producción");
operario.mostrarMensaje();
console.log(operario.getNombre(), operario.getApellido(), operario.getArea());