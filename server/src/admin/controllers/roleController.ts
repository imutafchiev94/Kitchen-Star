import { Router, Request, Response } from "express";
import { IRole } from "../../interfaces/roleInterface";
import roleService from "../services/roleService";
import Logger from "../../config/loggerConfig";

const router = Router();

router.post('/create', async (req: Request, res: Response) => {
    const roleData: IRole = req.body

    try {
        await roleService.createRole(roleData);

        Logger.debug('Role was created successfully!');
        res.status(201).json({message: 'Role was created successfully!'});
    } catch(error) {
        let message = 'Unknown Error';
        if(error instanceof Error) {
            message = error.message;
        }
        Logger.error(message);
        res.status(500).json( { message } )
    }
})

export default router;