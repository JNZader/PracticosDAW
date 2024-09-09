import { Request, Response } from 'express';
import { CursoEstudianteService } from '../services/CursoEstudianteService';

export class CursoEstudianteController {
    constructor(private readonly cursoEstudianteService: CursoEstudianteService) {}

    async getAll(req: Request, res: Response): Promise<Response> {
        const cursoEstudiantes = await this.cursoEstudianteService.findAll();
        return res.json(cursoEstudiantes);
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        const cursoEstudiante = await this.cursoEstudianteService.findOne(Number(req.params.id));
        if (!cursoEstudiante) {
            return res.status(404).json({ message: 'Curso-Estudiante no encontrado' });
        }
        return res.json(cursoEstudiante);
    }

    async create(req: Request, res: Response): Promise<Response> {
        const cursoEstudiante = await this.cursoEstudianteService.create(req.body);
        return res.status(201).json(cursoEstudiante);
    }

    async update(req: Request, res: Response): Promise<Response> {
        const cursoEstudiante = await this.cursoEstudianteService.update(Number(req.params.id), req.body);
        if (!cursoEstudiante) {
            return res.status(404).json({ message: 'Curso-Estudiante no encontrado' });
        }
        return res.json(cursoEstudiante);
    }

    async delete(req: Request, res: Response): Promise<Response> {
        await this.cursoEstudianteService.delete(Number(req.params.id));
        return res.status(204).send();
    }
}