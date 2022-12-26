import { IUser, UserModel } from '@models';
import { Auth } from '@services';

export const signup = async (_: any, { email, password, phoneNumber }: IUser) => {
  const hashedPwd = await Auth.hashPassword(password);
  const user = new UserModel({ email, password: hashedPwd, type: 'admin', phoneNumber });

  try {
    await user.save();
    return {
      message: `${email} successfully created`,
      success: true,
    };
  } catch (error) {
    return error;
  }
};
