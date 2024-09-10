import { Request, Response } from "express";
import { ClienteService } from "../services/ClienteService";

export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  async getAll(req: Request, res: Response): Promise<Response> {
    const clientes = await this.clienteService.findAll();
    return res.json(clientes);
  }

  async getOne(req: Request, res: Response): Promise<Response> {
    const cliente = await this.clienteService.findOne(Number(req.params.id));
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    return res.json(cliente);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const cliente = await this.clienteService.create(req.body);
    return res.status(201).json(cliente);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const cliente = await this.clienteService.update(
      Number(req.params.id),
      req.body
    );
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    return res.json(cliente);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    await this.clienteService.delete(Number(req.params.id));
    return res.status(204).send();
  }
}
