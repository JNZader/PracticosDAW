import { Request, Response } from 'express';
import { CitaService } from "../services/CitaService";
import { CitaDTO } from "../models/dtos/citadto";
import { validate } from 'class-validator';

export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  async getAll(req: Request, res: Response): Promise<Response> {
    const citas = await this.citaService.findAll();
    return res.json(citas);
  }

  async getOne(req: Request, res: Response): Promise<Response> {
    const cita = await this.citaService.findOne(Number(req.params.id));
    if (!cita) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }
    return res.json(cita);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const citaDTO = new CitaDTO();

    citaDTO.clienteId = req.body.clienteId;
    citaDTO.motivo = req.body.motivo;
    
    citaDTO.fecha = new Date(`${req.body.fecha}T${req.body.hora}`);
    
    const errors = await validate(citaDTO);
    if (errors.length > 0) {
      return res.status(400).json({ message: "Error de validación", errors });
    }
    const cita = await this.citaService.create(citaDTO);
    return res.status(201).json(cita);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const citaId = Number(req.params.id);
    const citaDTO = new CitaDTO();

    citaDTO.clienteId = req.body.clienteId;
    citaDTO.motivo = req.body.motivo;
    citaDTO.estado=req.body.estado;
    
    citaDTO.fecha = new Date(`${req.body.fecha}T${req.body.hora}`);
    
    const errors = await validate(citaDTO);
    if (errors.length > 0) {
      return res.status(400).json({ message: "Error de validación", errors });
    }
    const citaActualizada = await this.citaService.update(citaId, citaDTO);
    if (!citaActualizada) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }
    return res.json(citaActualizada);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    await this.citaService.delete(Number(req.params.id));
    return res.status(204).send();
  }
}