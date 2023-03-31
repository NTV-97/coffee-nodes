import { CartModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getCart = async (_: any, __: any, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  let cart = await CartModel.findOne({ user: context.userId }).populate('items.product');

  if (!cart) {
    cart = await CartModel.create({ user: context.userId });
  }
  return cart;
};
