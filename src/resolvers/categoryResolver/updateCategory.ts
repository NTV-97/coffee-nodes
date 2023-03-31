import { CategoryModel, ICategory } from '@models';
import { Error } from '@config';
import { removeEmptyObject } from '@utils';
import { Types } from 'mongoose';
import { Context } from '@types';

export const updateCategory = async (
  _: any,
  { id, input }: { id: Types.ObjectId; input: ICategory },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const data = removeEmptyObject(input);
  const response = await CategoryModel.findByIdAndUpdate(id, data, { upsert: true }, (err) => {
    if (err) throw new Error(`${err}`, '409');
  });

  return response;
};
