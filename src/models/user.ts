import { IUser, IUserDocument } from "@interfaces/user";
import { Schema, model } from 'mongoose';

const UserSchemaFields: Record<keyof IUser, any> = {
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
};

const UserSchema = new Schema<IUserDocument>(UserSchemaFields);

export const UserModel = model<IUserDocument>("User", UserSchema);