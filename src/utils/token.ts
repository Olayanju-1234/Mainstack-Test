import config from '@config/envs';
import { IUserAuthRequest } from '@interfaces/auth';
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = config;

export const Sign = (payload: IUserAuthRequest): any => {
    const accessToken = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '12h',
    });

    const refreshToken = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '7d',
    });

    return { accessToken, refreshToken };
};
