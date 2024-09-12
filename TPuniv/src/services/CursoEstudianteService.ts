import { CursoEstudiante } from '../models/cursoEstudiante';
import { BaseService } from './BaseService';

export class CursoEstudianteService extends BaseService<CursoEstudiante> {
    async findAll(): Promise<CursoEstudiante[]> {
        return (await this.execRepository).find();
    }

    async findOne(id: number): Promise<CursoEstudiante | null> {
        return (await this.execRepository).findOneBy({ id });
    }

    async create(cursoEstudiante: Partial<CursoEstudiante>): Promise<CursoEstudiante> {
        const newCursoEstudiante = (await this.execRepository).create(cursoEstudiante);
        return (await this.execRepository).save(newCursoEstudiante);
    }

    async update(id: number, cursoEstudiante: Partial<CursoEstudiante>): Promise<CursoEstudiante | null> {
        await (await this.execRepository).update(id, cursoEstudiante);
        return this.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await (await this.execRepository).delete(id);
    }

    async findByEstudianteId(idEstudiante: number): Promise<CursoEstudiante[]> {
        return (await this.execRepository).find({ where: { estudiante: { id: idEstudiante } } });
    }

    async findByCursoId(idCurso: number): Promise<CursoEstudiante[]> {
        return (await this.execRepository).find({ where: { curso: { id: idCurso } } });
    }

    async findByNota(nota: number): Promise<CursoEstudiante[]> {
        return (await this.execRepository).find({ where: { nota } });
    }

}
