import { AuthSignUp } from '@services/auth/signup.service';
import { AuthSignIn } from '@services/auth/signin.service';
import { ErrorResponse, SuccessResponse } from '@utils/responseHandler';
import { Request, Response } from 'express';

export const SignUp = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const response = await AuthSignUp(data);
        return SuccessResponse(res, 200, 'User created successfully', response);
    } catch (error: any) {
        if (error.message === 'User already exists') {
            return ErrorResponse(res, 400, error.message, 'User already exists');
        }
        return ErrorResponse(res, 500, error.message, 'Internal server error');
    }
};

export const SignIn = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const response = await AuthSignIn(data);
        return SuccessResponse(res, 200, 'User signed in successfully', response);
    } catch (error: any) {
        if (error.message === 'User not found') {
            return ErrorResponse(res, 404, error.message, 'User not found');
        }
        return ErrorResponse(res, 500, error.message, 'Internal server error');
    }
};
