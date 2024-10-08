import { Router, Request, Response } from "express";
import { IUser } from "../interfaces/userInterface";
import authService from '../services/authService';
import Logger from "../config/loggerConfig";
import isGuest from "../middlewares/isGuest";
import isAuthenticated from "../middlewares/isAuthenticated";
import 'dotenv/config';

const router = Router();

router.post('/login', isGuest, async (req: Request, res: Response) => {
    const { username, password } = req.body;
    
    try {
        let token = await authService.login(username, password);

        res.cookie(process.env.COOKIE_SESSION_NAME as string, token)
        Logger.info(token);
        Logger.debug('User was logged successfully');
        res.status(200).json({message: 'User was logged successfully'});
    } catch(error) {
        let message = 'Unknown Error';
        if(error instanceof Error) {
            message = error.message;
        }
        Logger.error(message);
        res.status(500).json( { message } )
    }
})

router.post('/register', isGuest, async (req: Request, res: Response) => {
    const userData: IUser = req.body

    Logger.info(userData.firstName);
    try {
        await authService.register(userData);

        Logger.debug('User was registered successfully');

        res.status(201).json({message: 'User was registered successfully'})
    } catch (error) {
        let message = 'Unknown Error';
        if(error instanceof Error) {
            message = error.message;
        }
        Logger.error(message);
        res.status(500).json( { message } )
    }
});

router.post('/logout', isAuthenticated, (req: Request, res: Response) => {
    res.clearCookie(process.env.COOKIE_SESSION_NAME as string)

    Logger.debug('User was logout successfully');
    
    res.status(200).json({message: 'User was logout successfully'});
})

export default router;