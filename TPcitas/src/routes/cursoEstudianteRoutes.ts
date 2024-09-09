import { Router } from "express";
import { CursoEstudianteController } from "../controllers/CursoEstudianteController";
import { CursoEstudianteService } from "../services/CursoEstudianteService";

const router = Router();
const cursoEstudianteController = new CursoEstudianteController(
  new CursoEstudianteService()
);

router
  .route("/")
  .get((req, res) => cursoEstudianteController.getAll(req, res))
  .post((req, res) => cursoEstudianteController.create(req, res));

router
  .route("/:id")
  .get((req, res) => cursoEstudianteController.getOne(req, res))
  .put((req, res) => cursoEstudianteController.update(req, res))
  .delete((req, res) => cursoEstudianteController.delete(req, res));

export default router;
