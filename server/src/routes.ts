import { Router } from "express";
import homeController from './controllers/homeController';
import authController from './controllers/authController';
import adminRouter from './admin/adminRoutes';
const router = Router();

router.use('/', homeController);
router.use('/admin', adminRouter);
router.use('/auth', authController);

export default router;