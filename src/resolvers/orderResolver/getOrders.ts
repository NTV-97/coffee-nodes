import { OrderModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getOrders = async (_: any, __: any, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const order = await OrderModel.find({ user: context.userId })
    .populate({
      path: 'items.product',
      populate: {
        path: 'category',
      },
    })
    .populate('user');

  return order;
};
