import { ICategory, CategoryModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getCategory = async (_: any, { id }: { id: any }, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const category: ICategory | null = await CategoryModel.findById(id);
  return category;
};
