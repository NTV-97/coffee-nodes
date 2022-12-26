import { Context } from '@types';
import { UserModel, IUser } from '@models';
import { Auth } from '@services';
import { Error } from '@config';
import { checkTypeUser } from '@utils';

export const createUser = async (
  _: any,
  { password, type, email, phoneNumber }: IUser,
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const checkUser: IUser = await UserModel.findOne({ email });
  if (checkUser?.email === email) {
    throw new Error('email already used', '409');
  }
  checkTypeUser(type);
  const hashedPwd = await Auth.hashPassword(password);
  const adminId = context.userId;

  const user = new UserModel({ email, password: hashedPwd, type, adminId, phoneNumber });
  await user.save();
  return {
    message: `${email} successfully created`,
    success: true,
  };
};
