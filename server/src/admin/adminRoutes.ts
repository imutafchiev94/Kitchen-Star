import { Router } from "express";
import roleController from './controllers/roleController';

const router = Router();

router.use('/role', roleController);

export default router;