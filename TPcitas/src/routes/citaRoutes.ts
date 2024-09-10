import { Router } from "express";
import { CitaController } from "../controllers/CitaController";
import { CitaService } from "../services/CitaService";

const router = Router();
const citaController = new CitaController(new CitaService());

router
  .route("/")
  .get((req, res) => citaController.getAll(req, res))
  .post((req, res) => citaController.create(req, res));

router
  .route("/:id")
  .get((req, res) => citaController.getOne(req, res))
  .put((req, res) => citaController.update(req, res))
  .delete((req, res) => citaController.delete(req, res));

export default router;
