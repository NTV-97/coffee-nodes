import { OrderModel } from '@models';
import { Context } from '@types';
import { Error } from '@config';
import { Types } from 'mongoose';

type StatusType = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED';
export const updateOrderStatus = async (
  _: any,
  { id, status }: { id: Types.ObjectId; status: StatusType },
  context: Context,
) => {
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
    order.status = status;
    await order.save();
  }

  return order;
};
