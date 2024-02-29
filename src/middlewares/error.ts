import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }

    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: err.message
        });
    }

    if (err.name === 'NotFoundError') {
        return res.status(404).json({
            message: err.message
        });
    }

    if (err.name === 'ConflictError') {
        return res.status(409).json({
            message: err.message
        });
    }

    if (err.name === 'BadRequestError') {
        return res.status(400).json({
            message: err.message
        });
    }

    return res.status(500).json({
        message: err.message
    });
};
