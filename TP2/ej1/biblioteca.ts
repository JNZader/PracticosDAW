import { Libro} from "./libro";

export class Biblioteca {
    private libros: Libro[];

    constructor() {
        this.libros = [];
    }

    agregarLibro(libro: Libro): void {
        this.libros.push(libro);
    }

    buscarLibros(termino: string): Libro[] {
        return this.libros.filter(libro =>
            (libro.titulo.toLowerCase().localeCompare(termino.toLowerCase()) === 0) ||
            (libro.autor.toLowerCase().localeCompare(termino.toLowerCase()) === 0)
        );
    }

    mostrarLibros(): void {
        this.libros.forEach(libro => {
            console.log(libro.toString());
        });
    }
}