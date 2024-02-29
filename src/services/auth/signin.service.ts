import { UserModel } from '@models/user';
import { IAuthError, IAuthPayload, IAuthResponse } from '@interfaces/auth';
import { IUserDocument } from '@interfaces/user';
import { ComparePassword } from '@utils/hashing';
import { Sign } from '@utils/token';

export const AuthSignIn = async (
    data: IAuthPayload
): Promise<IAuthResponse | IAuthError> => {
    const user = await UserModel.findOne({ email: data.email }).select(
        '+password'
    );

    if (!user || !ComparePassword(data.password, user.password)) {
        throw new Error('User not found');
    }

    const accessToken = Sign({
        _id: user._id as unknown as string,
    });

    const responseData: IUserDocument = user.toJSON();

    return { user: responseData, token: accessToken };
};
