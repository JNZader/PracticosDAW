import {Biblioteca} from './biblioteca';
import {Libro} from "./libro";

const biblioteca = new Biblioteca();

// crear libros
const libro1 = new Libro("Cien Años de Soledad", "Gabriel García Márquez", "1234567890");
const libro2 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", "0987654321");
const libro3 = new Libro("1984", "George Orwell", "1122334455");

// agregar libros
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);

// mostrar los libros
console.log("Libros en la biblioteca:");
biblioteca.mostrarLibros();

// buscar libro por titulo o autor
const resultados = biblioteca.buscarLibros("Cervantes");
resultados.forEach(libro => console.log(libro.toString()));