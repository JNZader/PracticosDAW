import { Request, Response } from "express";
import { ClienteService } from "../services/ClienteService";
import { ClienteDTO } from "../models/dtos/clientedto";
import { validate } from "class-validator";

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
    const clienteDto = new ClienteDTO();
    clienteDto.nombre = req.body.nombre;
    clienteDto.apellido = req.body.apellido;
    clienteDto.email = req.body.email;
    clienteDto.telefono = req.body.telefono;

    const errors = await validate(clienteDto);
    if (errors.length > 0) {
      return res.status(400).json({ message: "Errores de validación", errors });
    }

    const cliente = await this.clienteService.create(clienteDto);
    return res.status(201).json(cliente);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const clienteId = Number(req.params.id);
    const clienteDto = new ClienteDTO();
    clienteDto.nombre = req.body.nombre;
    clienteDto.apellido = req.body.apellido;
    clienteDto.email = req.body.email;
    clienteDto.telefono = req.body.telefono;

    const errors = await validate(clienteDto);
    if (errors.length > 0) {
      return res.status(400).json({ message: "Errores de validación", errors });
    }

    const cliente = await this.clienteService.update(clienteId, clienteDto);
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