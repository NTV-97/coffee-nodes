import { CartModel, ProductModel } from '@models';
import { Context } from '@types';
import { Error } from '@config';
import { calPrice, CartItemInputType } from './addToCart';

type CartItemUpdateInput = CartItemInputType & {
  cartItemIndex: number;
};

export const updateCartItem = async (
  _: any,
  { itemsUpdate }: { itemsUpdate: CartItemUpdateInput[] },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const cart = await CartModel.findOne({ user: context.userId })
    .populate('items.product')
    .populate('user');
  if (cart) {
    for (let index = 0; index < itemsUpdate.length; index++) {
      const { productId, quantity, size, toppings, cartItemIndex } = itemsUpdate[index];
      const product = await ProductModel.findById(productId);
      if (!product) throw new Error('Product not found', '404');
      const _calPrice = calPrice({ product, quantity, size, toppings });
      cart.items[cartItemIndex].price = _calPrice.totalPrice;
      cart.items[cartItemIndex].quantity = quantity;
      cart.items[cartItemIndex].size = size;
      cart.items[cartItemIndex].toppings = toppings;
    }

    //@ts-ignore
    cart.totalPrice = cart.items.reduce((pre, current) => pre.price + current.price);
    await cart.save();
  }

  return cart;
};
