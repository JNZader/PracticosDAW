import { Cliente } from "../models/entities/cliente";
import { BaseService } from "./BaseService";

export class ClienteService extends BaseService<Cliente> {
  async findAll(): Promise<Cliente[]> {
    return (await this.execRepository).find();
  }

  async findOne(id: number): Promise<Cliente | null> {
    return (await this.execRepository).findOneBy({ id });
  }

  async create(curso: Partial<Cliente>): Promise<Cliente> {
    const newCurso = (await this.execRepository).create(curso);
    return (await this.execRepository).save(newCurso);
  }

  async update(id: number, curso: Partial<Cliente>): Promise<Cliente | null> {
    await (await this.execRepository).update(id, curso);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await (await this.execRepository).delete(id);
  }
}
