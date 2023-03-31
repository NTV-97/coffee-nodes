import { UserModel, IUser } from '@models';
import { Auth } from '@services';
import { Error } from '@config';
import { removeEmptyObject } from '@utils';

export const editUser = async (
  _: any,
  { id, email, password, phoneNumber, name, address }: IUser,
) => {
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
  const data = {
    email,
    password: password ? await Auth.hashPassword(password) : undefined,
    phoneNumber,
    name,
    address,
  };
  const remove = removeEmptyObject(data);
  const response = await UserModel.findByIdAndUpdate(id, remove, { upsert: true }, (err) => {
    if (err) throw new Error(`${err}`, '409');
  });

  return response;
};
