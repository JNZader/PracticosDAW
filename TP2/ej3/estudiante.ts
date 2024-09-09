/**
 * 3. Sistema de Gestión de Estudiantes
 * Crea un sistema para gestionar la información de estudiantes en una universidad.
 * Cada estudiante tiene un nombre, matrícula, carrera, y una lista de notas. 
 * El sistema debe calcular el promedio de notas 
 * y determinar si el estudiante está aprobado (promedio mayor o igual a 60).
 * Requisitos:
 * •	Crear una clase Estudiante con propiedades como nombre, matricula, carrera, y un arreglo de notas.
 * •	Implementar un método que calcule el promedio de notas del estudiante.
 * •	Implementar un método que determine si el estudiante está aprobado o no en función del promedio. 
 */
class Estudiante {
    nombre: string;
    matricula: string;
    carrera: string;
    notas: number[];

    constructor(nombre: string, matricula: string, carrera: string, notas: number[]) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.carrera = carrera;
        this.notas = notas;
    }

    calcularPromedio(): number {
        const sumaNotas = this.notas.reduce((acumulado, nota) => acumulado + nota, 0);
        return sumaNotas / this.notas.length;
    }

    estaAprobado(): boolean {
        const promedio = this.calcularPromedio();
        return promedio >= 60;
    }
}

const estudiante1 = new Estudiante('Juan Pérez', '12345', 'Ingeniería', [75, 85, 90, 60]);
const estudiante2 = new Estudiante('María López', '54321', 'Medicina', [50, 55, 65, 40]);

console.log(`${estudiante1.nombre} - Promedio: ${estudiante1.calcularPromedio()}`);
console.log(`${estudiante2.nombre} - Promedio: ${estudiante2.calcularPromedio()}`);

console.log(`${estudiante1.nombre} - ¿Aprobado?: ${estudiante1.estaAprobado()}`);  
console.log(`${estudiante2.nombre} - ¿Aprobado?: ${estudiante2.estaAprobado()}`);  