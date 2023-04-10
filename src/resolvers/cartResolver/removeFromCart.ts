import { CartModel } from '@models';
import { Context } from '@types';
import { Error } from '@config';

export const removeFromCart = async (
  _: any,
  { cartItemIndex }: { cartItemIndex: number },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');

  const cart = await CartModel.findOne({ user: context.userId })
    .populate('items.product')
    .populate('user');

  if (!cart) {
    throw new Error('Cart not found', '404');
  }

  cart.items.splice(cartItemIndex, 1);

  //@ts-ignore
  cart.totalPrice = cart.items.reduce((pre, current) => pre.price + current.price).price;

  await cart.save();

  return cart;
};
