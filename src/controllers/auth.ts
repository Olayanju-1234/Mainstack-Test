import { AuthSignUp } from '@services/auth/signup.service';
import { AuthSignIn } from '@services/auth/signin.service';
import { ErrorResponse, SuccessResponse } from '@utils/responseHandler';
import { Request, Response } from 'express';

export const SignUp = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const response = await AuthSignUp(data);
        return SuccessResponse(res, response, 'User created successfully');
    } catch (error: any) {
        return ErrorResponse(res, error.message, 500, error);
    }
};

export const SignIn = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const response = await AuthSignIn(data);
        return SuccessResponse(res, response, 'User signed in successfully');
    } catch (error: any) {
        return ErrorResponse(res, error.message, 500, error);
    }
};
