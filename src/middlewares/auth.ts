import config from '@config/envs';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import {
    IUserAuthRequest,
    IAuthPayload,
    IAuthResponse,
    IAuthError,
} from '@interfaces/auth';
import { ErrorResponse } from '@utils/responseHandler';

const { JWT_SECRET } = config;

const auth = async (req: Request, res: Response, next: NextFunction) => {
    const token = extractToken(req);
    if (!token) {
        return ErrorResponse(res, 'No token provided', 401);
    }
    verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return ErrorResponse(res, 'Failed to authenticate token', 401);
        }
        req.user = decoded as IUserAuthRequest;
        return next();
    });
};

const extractToken = (req: Request): string | null => {
    const header = req.headers.authorization;
    if (header && header.startsWith("Bearer ")) {
        return header.split(" ")[1];
      }
    
      return null;
};
export default auth;
