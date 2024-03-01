export interface IErrorResponse {
    message: string;
    success: boolean;
    error?: IErrorResponseData;
}

export interface IErrorResponseData {
    [key: string]: any;
}

export interface ISuccessResponse {
    success: boolean;
    message: string;
    data: ISuccessResponseData;
}

export interface ISuccessResponseData {
    [key: string]: any;
}
