import { IProduct, ProductModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getProducts = async (_: any, __: any, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const products: IProduct[] = await ProductModel.find().populate('category');
  return products;
};
