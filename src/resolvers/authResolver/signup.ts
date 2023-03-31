import { IUser, UserModel } from '@models';
import { Auth } from '@services';
import { Error } from '@config';

export const signup = async (_: any, { registerInput }: { registerInput: IUser }) => {
  const { email, password, phoneNumber, name, address } = registerInput;
  try {
    const userExists = await UserModel.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (userExists) {
      if (email === userExists.email) {
        throw new Error('Email already exists for another user', '409');
      }
      if (phoneNumber === userExists.phoneNumber) {
        throw new Error('Phone number already exists for another user', '409');
      }
    }
    const hashedPwd = await Auth.hashPassword(password);
    const user: IUser = new UserModel({ email, password: hashedPwd, phoneNumber, name, address });
    await user.save();
    return {
      message: 'success',
      token: Auth.generateJwt({
        userId: user.id,
        email: user.email,
      }),
    };
  } catch (error) {
    return error;
  }
};
