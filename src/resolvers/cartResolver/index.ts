import { addToCart } from './addToCart';
import { clearCart } from './clearCart';
import { getCart } from './getCart';
import { removeFromCart } from './removeFromCart';
import { updateCartItem } from './updateCartItem';

export const cartResolvers = {
  Query: {
    getCart,
  },

  Mutation: {
    addToCart,
    clearCart,
    removeFromCart,
    updateCartItem,
  },
};
