import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";
import { ClienteService } from "../services/ClienteService";
import { Cliente } from "../models/entities/cliente";
import { AppDataSource } from "../database/data-source";

const router = Router();
const clienteController = new ClienteController(new ClienteService(Cliente,AppDataSource));

router
  .route("/")
  .get((req, res) => clienteController.getAll(req, res))
  .post((req, res) => clienteController.create(req, res));

router
  .route("/:id")
  .get((req, res) => clienteController.getOne(req, res))
  .put((req, res) => clienteController.update(req, res))
  .delete((req, res) => clienteController.delete(req, res));

export default router;
