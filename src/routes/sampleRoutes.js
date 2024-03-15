import { Router } from 'express';
import * as sampleController from '../controllers/sampleController';

const sampleRoutes = Router();

sampleRoutes.get('/', sampleController.getRoles);

export default sampleRoutes;
