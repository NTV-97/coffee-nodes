import { CartModel, IOrder, OrderModel, OrderStatus } from '@models';
import { Context } from '@types';
import { Error } from '@config';
import { Types } from 'mongoose';

export const placeOrder = async (
  _: any,
  { idCart, note }: { idCart: Types.ObjectId; note?: string },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');

  const cart = await CartModel.findById(idCart)
    .populate({
      path: 'items.product',
      populate: {
        path: 'category',
      },
    })
    .populate('user');
  const order = {
    user: cart?.user,
    items: cart?.items,
    totalPrice: cart?.totalPrice,
    status: OrderStatus.PENDING,
    note,
  };
  const newOrder = new OrderModel(order);
  await newOrder.save();
  const _order: IOrder | null = await OrderModel.findById(newOrder.id)
    .populate({
      path: 'items.product',
      populate: {
        path: 'category',
      },
    })
    .populate('user');
  return _order;
};
