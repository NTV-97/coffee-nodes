import { ICategory, CategoryModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getCategories = async (_: any, __: any, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const categories: ICategory[] = await CategoryModel.find();
  return categories;
};
