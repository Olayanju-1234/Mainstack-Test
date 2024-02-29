export interface IUser {
    email: string;
    password: string;
}

export interface IUserDocument extends IUser, Document {
    // Add methods here
}