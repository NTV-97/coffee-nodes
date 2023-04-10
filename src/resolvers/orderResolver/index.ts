import { cancelOrder } from './cancelOrder';
import { getOrder } from './getOrder';
import { getOrders } from './getOrders';
import { placeOrder } from './placeOrder';
import { updateOrderStatus } from './updateOrderStatus';

export const orderResolvers = {
  Query: {
    getOrder,
    getOrders,
  },

  Mutation: {
    cancelOrder,
    placeOrder,
    updateOrderStatus,
  },
};
