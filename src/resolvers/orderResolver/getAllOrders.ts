import { OrderModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const getAllOrders = async (_: any, __: any, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const order = await OrderModel.find()
    .populate({
      path: 'items.product',
      populate: {
        path: 'category',
      },
    })
    .populate('user');

  return order;
};
