import config from '@config/envs';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IUserAuthRequest } from '@interfaces/auth';
import { ErrorResponse } from '@utils/responseHandler';

const { JWT_SECRET } = config;

const auth = async (req: Request, res: Response, next: NextFunction) => {
    const token = extractToken(req);
    if (!token) {
        return ErrorResponse(res, 401, 'No token provided');
    }
    verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return ErrorResponse(res, 401, err.message, 'Unauthorized Error');
        }
        req.user = decoded as IUserAuthRequest;
        return next();
    });
};

const extractToken = (req: Request): string | null => {
    const header = req.headers.authorization;
    if (header && header.startsWith('Bearer ')) {
        return header.split(' ')[1];
    }

    return null;
};
export default auth;
