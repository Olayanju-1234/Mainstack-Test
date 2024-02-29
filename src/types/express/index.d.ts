import IUserAuthRequest from '@interfaces/auth';

declare global {
  export namespace Express {
    interface Request {
      user: IUserAuthRequest;
    }
  }
}
