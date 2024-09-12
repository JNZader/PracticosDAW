import { Request, Response } from 'express';
import { CursoService } from '../services/CursoService';
import { validate } from 'class-validator';
import { Curso } from '../models/curso';


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
        const curso = new Curso();

        curso.nombre=req.body.nombre;
        curso.descripcion=req.body.descripcion;
        curso.profesor=req.body.profesor;

        const errors=await validate(curso);

        if(errors.length>0){
            return res.status(400).json({ message: "Error de validación", errors });
        }

        const curso1 = await this.cursoService.create(req.body);
        return res.status(201).json(curso1);
    }

    async update(req: Request, res: Response): Promise<Response> {
        const curso = new Curso();
        
        curso.id=req.body.id;
        curso.nombre=req.body.nombre;
        curso.descripcion=req.body.descripcion;
        curso.profesor=req.body.profesor;

        const errors=await validate(curso);

        if(errors.length>0){
            return res.status(400).json({ message: "Error de validación", errors });
        }


        const curso1 = await this.cursoService.update(Number(req.params.id), req.body);
        if (!curso) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }
        return res.json(curso1);
    }

    async delete(req: Request, res: Response): Promise<Response> {
        await this.cursoService.delete(Number(req.params.id));
        return res.status(204).send();
    }
}