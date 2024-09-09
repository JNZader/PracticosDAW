import { Curso } from "../models/curso";
import { CursoRepository } from "../repositories/repositories";

export class CursoService {
  async findAll(): Promise<Curso[]> {
    return CursoRepository.find();
  }

  async findOne(id: number): Promise<Curso | null> {
    return CursoRepository.findOneBy({ id });
  }

  async create(curso: Partial<Curso>): Promise<Curso> {
    const newCurso = CursoRepository.create(curso);
    return CursoRepository.save(newCurso);
  }

  async update(id: number, curso: Partial<Curso>): Promise<Curso | null> {
    await CursoRepository.update(id, curso);
    return CursoRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await CursoRepository.delete(id);
  }
}
