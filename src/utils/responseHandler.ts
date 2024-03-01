import {
    ISuccessResponse,
    IErrorResponse,
    ISuccessResponseData,
    IErrorResponseData,
} from '@interfaces/responses';
import { Response } from 'express';

export const SuccessResponse = (
    res: Response,
    status: number = 200,
    message: string,
    data: ISuccessResponseData
): Response => {
    const response: ISuccessResponse = {
        success: true,
        message,
        data,
    };
    return res.status(status).json(response);
};

export const ErrorResponse = (
    res: Response,
    status: number = 500,
    message: string,
    error?: any
): Response => {
    const response: IErrorResponse = {
        success: false,
        message,
        error,
    };
    return res.status(status).json(response);
};
