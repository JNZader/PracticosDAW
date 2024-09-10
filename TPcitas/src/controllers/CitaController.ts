import { Request, Response } from "express";
import { CitaService } from "../services/CitaService";

export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  async getAll(req: Request, res: Response): Promise<Response> {
    const citas = await this.citaService.findAll();
    return res.json(citas);
  }

  async getOne(req: Request, res: Response): Promise<Response> {
    const cita = await this.citaService.findOne(
      Number(req.params.id)
    );
    if (!cita) {
      return res
        .status(404)
        .json({ message: "Cita no encontrada" });
    }
    return res.json(cita);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const cita = await this.citaService.create(req.body);
    return res.status(201).json(cita);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const cita = await this.citaService.update(
      Number(req.params.id),
      req.body
    );
    if (!cita) {
      return res
        .status(404)
        .json({ message: "Cita no encontrada" });
    }
    return res.json(cita);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    await this.citaService.delete(Number(req.params.id));
    return res.status(204).send();
  }
}
