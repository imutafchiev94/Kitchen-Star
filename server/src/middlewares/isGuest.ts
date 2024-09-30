import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies[process.env.COOKIE_SESSION_NAME || 'defaultCookieName'];

        if (!token) {
            return res.status(401).json({ message: 'Access Denied. No token provided.' });
        }

        const secret = process.env.USER_SESSION_SECRET || 'defaultUserSessionSecret';
        const decoded = jwt.verify(token, secret) as any;

        if(decoded.user) {
            return res.status(403).json({ message: 'Access Denied. Guests only.'});
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