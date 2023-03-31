import { UserModel, IUser } from '@models';

export const deleteUser = async (_: any, { id }: IUser) => {
  const res = await UserModel.findByIdAndDelete(id);
  if (res) {
    return {
      message: `Delete successfully`,
      success: true,
    };
  }
};
