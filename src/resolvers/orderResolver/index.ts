import { cancelOrder } from './cancelOrder';
import { getOrder } from './getOrder';
import { getOrders } from './getOrders';
import { placeOrder } from './placeOrder';
import { updateOrderStatus } from './updateOrderStatus';
import { getAllOrders } from './getAllOrders';
import { deleteAllOrders } from './deleteAllOrder';

export const orderResolvers = {
  Query: {
    getOrder,
    getOrders,
    getAllOrders,
  },

  Mutation: {
    cancelOrder,
    placeOrder,
    updateOrderStatus,
    deleteAllOrders,
  },
};
