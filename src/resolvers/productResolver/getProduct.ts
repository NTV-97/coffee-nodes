import { IProduct, ProductModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';
import { Types } from 'mongoose';

export const getProduct = async (_: any, { id }: { id: Types.ObjectId }, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');

  const product: IProduct | null = await ProductModel.findById(id).populate('category');
  if (!product) throw new Error('Product not found', '404');

  return product;
};
