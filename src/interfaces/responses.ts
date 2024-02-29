export interface IResponseData {
    [key: string]: any;
  }
  
  export interface IErrorResponse extends IResponseData {
    message: string;
    success: boolean;
    error?: IResponseData;
  }
  
  export interface ISuccessResponse extends IResponseData {
    success: boolean;
    message: string;
    data: IResponseData;
  }
  