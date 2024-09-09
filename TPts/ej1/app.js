function calcularArea(largo,ancho){
    return largo*ancho;
}

function saludar(nombre,edad){
    return edad>=18?`Hola ${nombre}, eres mayor de edad`:`Hola ${nombre}, eres menor de edad`;
}

const nombreProyecto="Proyecto";
let largo=15;
let ancho=7;
let edadUsuario=25;
const nombreUsuario="Ana";

const area=calcularArea(largo,ancho);
console.log(`${nombreProyecto} tiene un area de ${area}`);
console.log(saludar(nombreUsuario,edadUsuario));

//ejemplo de datos mixtos
const datosUsuario=["carlos",30];