import { CategoryModel, ICategory, UserRoleEnum } from '@models';
import { Context } from '@types';
import { Error } from '@config';

export const createCategory = async (
  _: any,
  { category }: { category: ICategory },
  context: Context,
) => {
  try {
    if (!context.userId) throw new Error('unauthorized', '401');
    if (context.role !== UserRoleEnum.ADMIN) throw new Error("use don't have permission", '400');
    const newCategory = new CategoryModel(category);
    return await newCategory.save();
  } catch (error) {
    return error;
  }
};
