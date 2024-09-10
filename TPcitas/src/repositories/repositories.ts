import { Repository } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { Cita } from "../models/cita";
import { Cliente } from "../models/cliente";

export const ClienteRepository: Repository<Cliente> =
  AppDataSource.getRepository(Cliente);
export const CitaRepository: Repository<Cita> =
  AppDataSource.getRepository(Cita);
