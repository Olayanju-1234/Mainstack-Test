import {
    ISuccessResponse,
    IErrorResponse,
    IResponseData,
} from '@interfaces/responses';
import { Response } from 'express';

export const SuccessResponse = (
    res: Response,
    data: IResponseData,
    message: string,
    status: number = 200
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
    message: string,
    status: number = 500,
    error?: IResponseData
): Response => {
    const response: IErrorResponse = {
        success: false,
        message,
        error,
    };
    return res.status(status).json(response);
};
