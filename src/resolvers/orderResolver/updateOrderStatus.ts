import { OrderModel, OrderStatus, UserRoleEnum } from '@models';
import { Context } from '@types';
import { Error } from '@config';
import { Types } from 'mongoose';

export const updateOrderStatus = async (
  _: any,
  { id, status }: { id: Types.ObjectId; status: OrderStatus },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  if (context.role !== UserRoleEnum.ADMIN) throw new Error("use don't have permission", '400');

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
