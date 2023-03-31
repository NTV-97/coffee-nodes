import { Auth } from '@services';
import { UserModel, IUser } from '@models';

export const login = async (_: any, { email, password, phoneNumber }: IUser) => {
  const isEmailRequired = !email || !email.length;
  const isPhoneRequired = !phoneNumber || !phoneNumber.length;
  if (isEmailRequired && isPhoneRequired) {
    return {
      message: 'email / phone required',
      token: null,
    };
  }
  const userPayload = email?.length ? { email } : { phoneNumber };

  const user: IUser | null = await UserModel.findOne({
    $or: [{ email }, { phoneNumber }],
  });
  if (!user) {
    return {
      message: `Unknown user: ${JSON.stringify(userPayload)}`,
      token: null,
    };
  }

  const correctPassword = await Auth.matchPasswords(password, user.password);
  if (!correctPassword) {
    return {
      message: 'invalid password',
      token: null,
    };
  }

  return {
    message: 'success',
    token: Auth.generateJwt({
      userId: user.id,
      email: user.email,
    }),
  };
};
