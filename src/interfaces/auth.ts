export interface IUserAuthRequest {
    _id: string;
}

export interface IAuthPayload {
    email: string;
    password: string;
}

export interface IAuthResponse {
    user: IAuthPayload;
    token?: string;
}

export interface IAuthError {
    message: string;
}