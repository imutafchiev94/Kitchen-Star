import { Request, Response, NextFunction } from 'express';


export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies[process.env.COOKIE_SESSION_NAME || 'defaultCookieName'];

        if (!token) {
            return res.status(401).json({ message: 'Access Denied. Logged users only.' });
        }

        next();
        
    } catch(error) {
        let message = 'Unknown Error';
        if(error instanceof Error) {
            message = error.message;
        }
        return res.status(400).json({ message: 'Invalid token.', error: message });
    }
}