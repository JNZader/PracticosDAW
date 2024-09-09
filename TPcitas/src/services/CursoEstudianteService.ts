import { CursoEstudianteRepository } from '../repositories/repositories';
import { CursoEstudiante } from '../models/cursoEstudiante';

export class CursoEstudianteService {
    async findAll(): Promise<CursoEstudiante[]> {
        return CursoEstudianteRepository.find();
    }

    async findOne(id: number): Promise<CursoEstudiante | null> {
        return CursoEstudianteRepository.findOneBy({ id });
    }

    async create(cursoEstudiante: Partial<CursoEstudiante>): Promise<CursoEstudiante> {
        const newCursoEstudiante = CursoEstudianteRepository.create(cursoEstudiante);
        return CursoEstudianteRepository.save(newCursoEstudiante);
    }

    async update(id: number, cursoEstudiante: Partial<CursoEstudiante>): Promise<CursoEstudiante | null> {
        await CursoEstudianteRepository.update(id, cursoEstudiante);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await CursoEstudianteRepository.delete(id);
    }
}