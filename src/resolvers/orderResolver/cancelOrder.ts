import { OrderModel, OrderStatus } from '@models';
import { Context } from '@types';
import { Error } from '@config';
import { Types } from 'mongoose';

export const cancelOrder = async (_: any, { id }: { id: Types.ObjectId }, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');

  const order = await OrderModel.findById(id)
    .populate({
      path: 'items.product',
      populate: {
        path: 'category',
      },
    })
    .populate('user');
  if (order) {
    order.status = OrderStatus.CANCELLED;
    await order.save();
  }

  return order;
};
