import { CartModel, IProduct, ProductModel } from '@models';
import { Context } from '@types';
import { Error } from '@config';
import { Types } from 'mongoose';
import { arraysEqual } from '@utils';
import { cloneDeep } from 'lodash';

export type CartItemInputType = {
  productId: Types.ObjectId;
  quantity: number;
  size: string;
  toppings: [string];
};

export const calPrice = ({
  product,
  size,
  toppings,
  quantity,
}: {
  product: IProduct;
  size: string;
  toppings: [string];
  quantity: number;
}) => {
  const sizePrice = product?.details.size.find((i) => i.name === size)?.price || 0;
  let toppingPrice = 0;
  toppings.forEach((item) => {
    toppingPrice += product?.details.topping.find((i) => i.name === item)?.price || 0;
  });
  const price = (product?.price || 0) * quantity + sizePrice + toppingPrice;
  return {
    sizePrice,
    toppingPrice,
    totalPrice: price,
  };
};

export const addToCart = async (
  _: any,
  { items }: { items: CartItemInputType[] },
  context: Context,
) => {
  if (!context.userId) throw new Error('unauthorized', '401');

  let cart = await CartModel.findOne({ user: context.userId })
    .populate('items.product')
    .populate('user');
  const _items = [];

  let totalPrice = 0;
  const existingItem = [];
  for (let index = 0; index < items.length; index++) {
    const { productId, quantity, size, toppings } = items[index];
    const product = await ProductModel.findById(productId);
    if (!product) {
      throw new Error('Product not found', '404');
    }
    const _existingItem = cart?.items.find(
      // @ts-ignore
      (i) => i.product?.id === productId && i.size === size && arraysEqual(i.toppings, toppings),
    );

    const _calPrice = calPrice({ product, quantity, size, toppings });
    const item = {
      product,
      quantity,
      size,
      toppings,
      price: _calPrice.totalPrice,
    };
    _items.push(item);
    if (_existingItem) {
      existingItem.push(item);
    }
    totalPrice += _calPrice.totalPrice;
  }

  if (!cart) {
    cart = await CartModel.create({ user: context.userId, items: _items, totalPrice });
  } else {
    if (existingItem.length) {
      //   let _totalPrice = 0;
      const itemsClone = cloneDeep(existingItem);
      cart.items.forEach((item1) => {
        const item2 = itemsClone.find(
          (item) =>
            // @ts-ignore
            item.product.id === item1.product.id &&
            item.size === item1.size &&
            arraysEqual(item.toppings, item1.toppings),
        );
        if (item2) {
          item1.quantity += item2.quantity;
          item1.price += item2.price;

          // @ts-ignore
          cart.totalPrice += item2.price;
        }
      });
    } else {
      cart.totalPrice += totalPrice;
      cart.items = [...cart.items, ..._items];
    }
  }

  await cart.save();
  const newCart = await CartModel.findById(cart.id)
    .populate({
      path: 'items.product',
      populate: {
        path: 'category',
      },
    })
    .populate('user');

  return newCart;
};
