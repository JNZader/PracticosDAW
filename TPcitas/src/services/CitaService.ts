import { Cita } from "../models/cita";
import { CitaRepository } from "../repositories/repositories";

export class CitaService {
  async findAll(): Promise<Cita[]> {
    return CitaRepository.find();
  }

  async findOne(id: number): Promise<Cita | null> {
    return CitaRepository.findOneBy({ id });
  }

  async create(cursoEstudiante: Partial<Cita>): Promise<Cita> {
    const newCursoEstudiante = CitaRepository.create(cursoEstudiante);
    return CitaRepository.save(newCursoEstudiante);
  }

  async update(
    id: number,
    cursoEstudiante: Partial<Cita>
  ): Promise<Cita | null> {
    await CitaRepository.update(id, cursoEstudiante);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await CitaRepository.delete(id);
  }
}
