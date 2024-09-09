/**
 * 4- La siguiente función contendrá parámetros obligatorios,
 *  opcionales y otros serán por defecto si no le pasamos ninguno. 
 *  Deberás adaptarlos de la siguiente forma:
 *  nombre → obligatorio
 *  edad → opcional
 *  puesto → por defecto u omisión será "operario"
 */

import {Empleado} from '../ej1/empleado'

function obtenerDatosEmpleado(nombre: string, edad?: number, puesto: string = "operario") {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad || "No disponible"}`);
    console.log(`Puesto: ${puesto}`);
  }
  
  obtenerDatosEmpleado("Ana");
  obtenerDatosEmpleado("Pedro", 25, "Ingeniero"); 

  const empleado2 = new Empleado(
    "María",
    "García",
    25,
    false,
    ["Analista", "Tester"],
    "Ingeniería"
  );
  
  empleado2.mostrarDatosEmpleado();