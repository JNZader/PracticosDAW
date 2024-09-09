import { Column, Entity, ManyToOne } from "typeorm";
import { Curso } from "./curso";
import { Estudiante } from "./estudiante";
import { BaseEntity } from "./BaseEntity";

@Entity()
export class CursoEstudiante extends BaseEntity {
  @Column("float")
  private _nota: number;

  @Column("date")
  private _fecha: Date;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.cursosEstudiante)
  private _estudiante: Estudiante;

  @ManyToOne(() => Curso, (curso) => curso.cursoEstudiante)
  private _curso: Curso;

  constructor(nota: number, fecha: Date, estudiante: Estudiante, curso: Curso) {
    super();
    this._nota = nota;
    this._fecha = fecha;
    this._estudiante = estudiante;
    this._curso = curso;
  }

  get nota(): number {
    return this._nota;
  }

  get fecha(): Date {
    return this._fecha;
  }

  get estudiante(): Estudiante {
    return this._estudiante;
  }

  get curso(): Curso {
    return this._curso;
  }

  set nota(nota: number) {
    if (nota < 0 || nota > 10) {
      throw new Error("La nota debe estar entre 0 y 10");
    }
    this._nota = nota;
  }

  set fecha(fecha: Date) {
    this._fecha = fecha;
  }

  set estudiante(estudiante: Estudiante) {
    this._estudiante = estudiante;
  }

  set curso(curso: Curso) {
    this._curso = curso;
  }
}