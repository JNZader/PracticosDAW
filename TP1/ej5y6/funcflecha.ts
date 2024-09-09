/**
 * 5- Convertir las siguientes funciones a funciones flecha 
 * function obtenerDoble( a, b ){
 *   return (a + b) * 2
 * }
 * function obtenerTriple( a, b, c ){
 *   return (a + b +c) * 3
 * }
 * */

const obtenerDoble = (a: number, b: number) => (a + b) * 2;
console.log(obtenerDoble(5, 3)); 

const obtenerTriple = (a: number, b: number, c: number) => (a + b + c) * 3;
console.log(obtenerTriple(1, 2, 3));

/*
 * 6- Convertir esta funcion a una funcion de flecha
 * function resultadoDoble( a, b ){
 *     return (a + b) * 2
 * }
 *  
 */

const resultadoDoble = (a: number, b: number) => (a + b) * 2;
console.log(resultadoDoble(7, 4));