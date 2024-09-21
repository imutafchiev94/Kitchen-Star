import { Router, Request, Response } from "express";
import { IUser } from "../interfaces/userInterface";
import authService from '../services/authService';
import Logger from "../config/loggerConfig";

const router = Router();

router.post('/login', (req, res) => {

})

router.post('/register', async (req: Request, res: Response) => {
    const userData: IUser = req.body

    Logger.info(userData.firstName);
    try {
        await authService.register(userData);

        Logger.debug('User was registered successfully');

        res.status(201).json({message: 'User was registered successfully'})
    } catch (err) {
        Logger.error(err);
        res.status(500).json( {message: err} )
    }
})

export default router;