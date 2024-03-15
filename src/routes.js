import { Router } from 'express';
import sampleRoutes from './routes/sampleRoutes';

const router = Router();

router.use('/sample', sampleRoutes);

export default router;
