import { Repository } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { Curso } from "../models/curso";
import { CursoEstudiante } from "../models/cursoEstudiante";
import { Estudiante } from "../models/estudiante";
import { Profesor } from "../models/profesor";

export const CursoRepository: Repository<Curso> =
  AppDataSource.getRepository(Curso);
export const CursoEstudianteRepository: Repository<CursoEstudiante> =
  AppDataSource.getRepository(CursoEstudiante);
export const EstudianteRepository: Repository<Estudiante> =
  AppDataSource.getRepository(Estudiante);
export const ProfesorRepository: Repository<Profesor> =
  AppDataSource.getRepository(Profesor);
