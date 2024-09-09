import { Request, Response } from 'express';
import { CursoService } from '../services/CursoService';

export class CursoController {
    constructor(private readonly cursoService: CursoService) {}

    async getAll(req: Request, res: Response): Promise<Response> {
        const cursos = await this.cursoService.findAll();
        return res.json(cursos);
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        const curso = await this.cursoService.findOne(Number(req.params.id));
        if (!curso) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }
        return res.json(curso);
    }

    async create(req: Request, res: Response): Promise<Response> {
        const curso = await this.cursoService.create(req.body);
        return res.status(201).json(curso);
    }

    async update(req: Request, res: Response): Promise<Response> {
        const curso = await this.cursoService.update(Number(req.params.id), req.body);
        if (!curso) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }
        return res.json(curso);
    }

    async delete(req: Request, res: Response): Promise<Response> {
        await this.cursoService.delete(Number(req.params.id));
        return res.status(204).send();
    }
}