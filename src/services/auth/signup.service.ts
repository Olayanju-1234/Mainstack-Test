import { UserModel } from '@models/user';
import { IAuthError, IAuthPayload, IAuthResponse } from '@interfaces/auth';
import { IUserDocument } from '@interfaces/user';
import { HashPassword } from '@utils/hashing';

export const AuthSignUp = async (
    data: IAuthPayload
): Promise<IAuthResponse | IAuthError> => {
    const user = await UserModel.findOne({ email: data.email });
    if (user) {
        throw new Error('User already exists');
    }

    data.password = HashPassword(data.password);

    const newUser = await UserModel.create(data);

    const responseData: IUserDocument = newUser.toJSON();

    return { user: responseData };
};
