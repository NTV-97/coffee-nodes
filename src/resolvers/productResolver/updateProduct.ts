import { ProductModel, IProduct } from '@models';
import { Error } from '@config';
import { removeEmptyObject } from '@utils';
import { Types } from 'mongoose';
import { Context } from '@types';

export const updateProduct = async (
  _: any,
  { id, product }: { id: Types.ObjectId; product: IProduct },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const data = removeEmptyObject(product);
  const response = await ProductModel.findByIdAndUpdate(id, data, { upsert: true }, (err) => {
    if (err) throw new Error(`${err}`, '409');
  });

  return response;
};
