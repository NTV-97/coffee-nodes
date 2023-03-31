import { CartModel } from '@models';
import { Context } from '@types';
import { Error } from '@config';

export const clearCart = async (_: any, __: any, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const cart = await CartModel.findOne({ user: context.userId });
  if (!cart) {
    throw new Error('Cart not found', '404');
  }
  cart.items = [];
  cart.totalPrice = 0;
  await cart.save();
  return cart;
};
