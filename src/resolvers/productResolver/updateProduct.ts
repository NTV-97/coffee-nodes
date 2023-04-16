import { ProductModel, IProduct, UserRoleEnum } from '@models';
import { Error } from '@config';
import { Types } from 'mongoose';
import { Context } from '@types';

export const updateProduct = async (
  _: any,
  { id, product }: { id: Types.ObjectId; product: IProduct },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  if (context.role !== UserRoleEnum.ADMIN) throw new Error("use don't have permission", '400');
  const _product = await ProductModel.findById(id).populate('category');
  Object.keys(product).forEach((key) => {
    //@ts-ignore
    if (product[key]) {
      //@ts-ignore
      _product[key] = product[key];
    }
  });

  _product?.save();
  const newProduct = await ProductModel.findById(id).populate('category');

  return newProduct;
};
