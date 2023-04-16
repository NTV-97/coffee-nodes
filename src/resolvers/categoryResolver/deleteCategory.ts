import { CategoryModel, ICategory, UserRoleEnum, ProductModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const deleteCategory = async (_: any, { id }: ICategory, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  if (context.role !== UserRoleEnum.ADMIN) throw new Error("use don't have permission", '400');
  await ProductModel.deleteMany({ category: id });
  const res = await CategoryModel.findByIdAndDelete(id);
  if (res) {
    return {
      message: `Delete successfully`,
      success: true,
    };
  }
};
