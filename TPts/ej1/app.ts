function calcularAreats(largo:number,ancho:number):number{
    return largo*ancho
}

function saludarts(nombre:string,edad:number):string{
    return edad>=18?`hola ${nombre}, eres mayor de edad`:`hola ${nombre}, eres menor de edad`;
}

const nombreProyecto2:string="Proyecto";
let largo2:number=15;
let ancho2:number=7;
let edadUsuario2:number=25;
const nombreUsuario2:string="Ana";

const area2 = calcularAreats(largo2, ancho2);
console.log(`${nombreProyecto2} tiene un área de ${area2}`);
console.log(saludarts(nombreUsuario2, edadUsuario2));

// ejemplo de datos mixtos
const datosUsuario2: [string, number] = ["carlos", 30];