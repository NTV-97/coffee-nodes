import { CategoryModel, ICategory, UserRoleEnum } from '@models';
import { Error } from '@config';
import { removeEmptyObject } from '@utils';
import { Types } from 'mongoose';
import { Context } from '@types';

export const updateCategory = async (
  _: any,
  { id, category }: { id: Types.ObjectId; category: ICategory },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  if (context.role !== UserRoleEnum.ADMIN) throw new Error("use don't have permission", '400');
  const data = removeEmptyObject(category);
  const response = await CategoryModel.findByIdAndUpdate(id, data, { upsert: true }, (err) => {
    if (err) throw new Error(`${err}`, '409');
  });

  return response;
};
