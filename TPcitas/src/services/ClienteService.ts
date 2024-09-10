import { ClienteRepository } from "../repositories/repositories";
import { Cliente } from "../models/cliente";

export class ClienteService {
  async findAll(): Promise<Cliente[]> {
    return ClienteRepository.find();
  }

  async findOne(id: number): Promise<Cliente | null> {
    return ClienteRepository.findOneBy({ id });
  }

  async create(curso: Partial<Cliente>): Promise<Cliente> {
    const newCurso = ClienteRepository.create(curso);
    return ClienteRepository.save(newCurso);
  }

  async update(id: number, curso: Partial<Cliente>): Promise<Cliente | null> {
    await ClienteRepository.update(id, curso);
    return ClienteRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await ClienteRepository.delete(id);
  }
}
