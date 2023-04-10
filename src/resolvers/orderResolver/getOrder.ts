import { OrderModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';
import { Types } from 'mongoose';

export const getOrder = async (_: any, { id }: { id: Types.ObjectId }, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const order = await OrderModel.findById(id)
    .populate({
      path: 'items.product',
      populate: {
        path: 'category',
      },
    })
    .populate('user');

  return order;
};
