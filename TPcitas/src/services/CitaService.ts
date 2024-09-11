import { Cita } from "../models/entities/cita";
import { CitaDTO } from "../models/dtos/citadto";
import { BaseService } from "./BaseService";
import { Cliente } from "../models/entities/cliente";

export class CitaService extends BaseService<Cita>{
  async findAll(): Promise<Cita[]> {
    return await (await this.execRepository).find({
      relations: ['cliente'], 
    });  }

  async findOne(id: number): Promise<Cita | null> {
    return (await this.execRepository).findOneBy({ id });
  }

  async create(cita: CitaDTO): Promise<Cita> {

    const cliente = await (await this.execRepository).manager.findOne(Cliente, { where: { id: cita.clienteId }});
    
    if (!cliente) {
      throw new Error("Cliente no encontrado");
    }

    const newCita = (await this.execRepository).create({
      fecha: cita.fecha,
      motivo: cita.motivo,
      cliente: cliente, 
    });

    return (await this.execRepository).save(newCita);
  }

  async update(id: number, cita: CitaDTO): Promise<Cita | null> {

    const cliente = await (await this.execRepository).manager.findOne(Cliente, { where: { id: cita.clienteId }});
    
    if (!cliente) {
      throw new Error("Cliente no encontrado");
    }

    const citaToUpdate = {
      fecha: cita.fecha,
      motivo: cita.motivo,
      estado:cita.estado,
      cliente: cliente
    };

    await (await this.execRepository).update(id, citaToUpdate);
    return this.findOne(id);
}


  async delete(id: number): Promise<void> {
    await (await this.execRepository).delete(id);
  }
}