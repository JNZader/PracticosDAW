/**
 * 1-Crear una clase Empleado, con las siguientes propiedades nombre, apellido,
 *  edad (dato numérico), activo (dato del tipo true/false),
 *  roles (es un array con los roles que puede desempañar el empleado),
 *   dato que contiene información extra, puede ser la cantidad de hijos(un número)
 *  o el título (una cadena). Deberá  un constructor (que inicialice los atributos 
 * y los muestre por consola).
 * Instanciar un objeto y luego compilar el typescript a js. 
 */

export class Empleado {
    nombre: string;
    apellido: string;
    edad: number;
    activo: boolean;
    roles: string[];
    datoExtra: number | string;
  
    constructor(
        nombre: string,
        apellido: string,
        edad: number, 
        activo: boolean, 
        roles: string[], 
        datoExtra: number | string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.activo = activo;
      this.roles = roles;
      this.datoExtra = datoExtra;
  
      console.log(`Empleado creado: ${this.nombre} ${this.apellido}`);
    }

    mostrarDatosEmpleado() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad || "No disponible"}`);
      console.log(`Roles: ${this.roles.join(", ")}`);
      console.log(`Información adicional: ${this.datoExtra}`);
    }
  }
  
  const empleado1 = new Empleado("Juan", "Perez", 30, true, ["Desarrollador", "Lider"], 2);
  empleado1.mostrarDatosEmpleado();