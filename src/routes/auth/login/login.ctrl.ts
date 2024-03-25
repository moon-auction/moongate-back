import { Request, Response, NextFunction, RequestHandler } from 'express';

export const login: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch(e) {
        return next(e);
    }
}