import { Router } from "express";
import homeController from './controllers/homeController';
import authController from './controllers/authController';

const router = Router();

router.use('/', homeController);
router.use('/auth', authController);

export default router;