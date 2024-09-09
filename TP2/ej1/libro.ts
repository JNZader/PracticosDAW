/**
 * 1. Sistema de Gestión de Biblioteca
 * Crea una aplicación para gestionar una biblioteca. 
 * La biblioteca tiene libros, cada uno con un título, autor, ISBN, y estado (disponible o prestado). 
 * Los usuarios pueden pedir prestados libros y devolverlos. Implementa clases para Libro y Biblioteca,
 *  y maneja las acciones de préstamo y devolución.
 * Requisitos:
 * •	Crear una clase Libro con propiedades como titulo, autor, isbn, y estado.
 * •	Crear una clase Biblioteca que tenga un arreglo de libros y métodos para prestar y devolver libros.
 * •	Implementar un método que permita buscar libros por título o autor.
 */
export class Libro {
    titulo: string;
    autor: string;
    isbn: string;
    disponible: boolean;

    constructor(titulo: string, autor: string, isbn: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = true; 
    }

    toString(): string {
        return `Libro { Título: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}, Estado: ${this.disponible ? 'Disponible' : 'Prestado'} }`;
    }
}