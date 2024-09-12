import { Request, Response } from 'express';
import { CursoEstudianteService } from '../services/CursoEstudianteService';
import { CursoEstudiante } from '../models/cursoEstudiante';
import { validate } from 'class-validator';

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
        const cursoEstudianteB = new CursoEstudiante();

        cursoEstudianteB.estudiante = req.body.estudiante;
        cursoEstudianteB.curso = req.body.curso;
        cursoEstudianteB.nota = req.body.nota;
        cursoEstudianteB.fecha = new Date(req.body.fecha);

        const errors = await validate(cursoEstudianteB);

        if (errors.length > 0) {
            return res.status(400).json({ message: "Error de validación", errors });
        }

        const cursoEstudiante = await this.cursoEstudianteService.create(req.body);

        return res.status(201).json(cursoEstudiante);
    }

    async update(req: Request, res: Response): Promise<Response> {
        const cursoEstudianteB = new CursoEstudiante();

        cursoEstudianteB.estudiante = req.body.estudiante;
        cursoEstudianteB.curso = req.body.curso;
        cursoEstudianteB.nota = req.body.nota;
        cursoEstudianteB.fecha = new Date(req.body.fecha);

        const errors = await validate(cursoEstudianteB);

        if (errors.length > 0) {
            return res.status(400).json({ message: "Error de validación", errors });
        }

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

    async getByEstudianteId(req: Request, res: Response): Promise<Response> {
        const cursoEstudiantes = await this.cursoEstudianteService.findByEstudianteId(Number(req.params.idEstudiante));
        return res.json(cursoEstudiantes);
    }

    async getByCursoId(req: Request, res: Response): Promise<Response> {
        const cursoEstudiantes = await this.cursoEstudianteService.findByCursoId(Number(req.params.idCurso));
        return res.json(cursoEstudiantes);
    }

    async getByNota(req: Request, res: Response): Promise<Response> {
        const cursoEstudiantes = await this.cursoEstudianteService.findByNota(Number(req.params.nota));
        return res.json(cursoEstudiantes);
    }

}
