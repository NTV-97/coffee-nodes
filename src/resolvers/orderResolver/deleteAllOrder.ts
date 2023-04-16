import { OrderModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const deleteAllOrders = async (_: any, __: any, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const order = await OrderModel.deleteMany()
    .populate({
      path: 'items.product',
      populate: {
        path: 'category',
      },
    })
    .populate('user');
  if (order.ok) {
    return {
      message: `Delete successfully`,
      success: true,
    };
  }
  return order;
};
