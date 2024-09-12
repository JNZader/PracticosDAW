import { Router } from "express";
import { CursoEstudianteController } from "../controllers/CursoEstudianteController";
import { CursoEstudianteService } from "../services/CursoEstudianteService";
import { CursoEstudiante } from "../models/cursoEstudiante";
import { AppDataSource } from "../database/data-source";

const router = Router();
const cursoEstudianteController = new CursoEstudianteController(
  new CursoEstudianteService(CursoEstudiante,AppDataSource));

router
  .route("/")
  .get((req, res) => cursoEstudianteController.getAll(req, res))
  .post((req, res) => cursoEstudianteController.create(req, res));

router
  .route("/:id")
  .get((req, res) => cursoEstudianteController.getOne(req, res))
  .put((req, res) => cursoEstudianteController.update(req, res))
  .delete((req, res) => cursoEstudianteController.delete(req, res));

router
  .route("/estudiante/:idEstudiante")
  .get((req, res) => cursoEstudianteController.getByEstudianteId(req, res));

router
  .route("/curso/:idCurso")
  .get((req, res) => cursoEstudianteController.getByCursoId(req, res));

router
  .route("/nota/:nota")
  .get((req, res) => cursoEstudianteController.getByNota(req, res));

export default router;
