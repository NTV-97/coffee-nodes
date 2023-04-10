import { CategoryModel, ICategory } from '@models';
import { Context } from '@types';
import { Error } from '@config';

export const createCategory = async (
  _: any,
  { category }: { category: ICategory },
  context: Context,
) => {
  try {
    if (!context.userId) throw new Error('unauthorized', '401');
    const newCategory = new CategoryModel(category);
    return await newCategory.save();
  } catch (error) {
    return error;
  }
};
