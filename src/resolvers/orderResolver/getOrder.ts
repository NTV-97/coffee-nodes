import { IOrder, OrderData, OrderModel } from '@models';
import { Error } from '@config';
import { Context } from '@types';
import { Types } from 'mongoose';
import { permissionOrder } from '@utils';

const compare = (a: OrderData, b: OrderData) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const getOrders = async (_: any, _params: undefined, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
};

export const getOrder = async (_: any, { id }: { id: Types.ObjectId }, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  await permissionOrder(id, context);
  const order: IOrder = await OrderModel.findById(id);

  return {
    id: order.id,
    createdAt: order.createdAt,
    tableId: order.tableId,
    price: order.price,
    totalPrice: order.totalPrice,
    discount: order.discount,
    priceDiscount: order.priceDiscount,
    unitDiscount: order.unitDiscount,
    orderData: order.orderData.sort(compare),
    count: order.count,
  };
};
