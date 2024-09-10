import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import clienteRoutes from './routes/clienteRoutes';
import citaRoutes from './routes/citaRoutes';
import { errorHandlerMiddleware } from './database/errorHandler';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Rutas
app.use('/cliente', clienteRoutes);
app.use('/cita', citaRoutes);

// Middleware de manejo de errores
app.use(errorHandlerMiddleware);

export default app;