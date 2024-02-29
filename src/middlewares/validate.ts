import { ErrorResponse } from '@utils/responseHandler';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import Joi from 'joi';

/**
 * @description Validates the request body
 * @param {Joi.ObjectSchema<any>} schema
 * @returns {RequestHandler}
 *
 */
export const validateBody = (schema: Joi.ObjectSchema<any>): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, {
            abortEarly: false,
            allowUnknown: true,
        });
        if (error) {
            return ErrorResponse(
                res,
                error.details.map((e) => e.message).join(', '),
                400
            );
        }
        return next();
    };
};
