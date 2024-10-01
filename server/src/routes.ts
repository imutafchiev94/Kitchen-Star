import { Router } from "express";
import homeController from './controllers/homeController';
import authController from './controllers/authController';
import adminRouter from './admin/adminRoutes';
import isAdmin from "./middlewares/isAdmin";
const router = Router();

router.use('/', homeController);
router.use('/admin', isAdmin, adminRouter);
router.use('/auth', authController);

export default router;