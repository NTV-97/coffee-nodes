import { Model, Document, Types, Schema, model } from 'mongoose';
import { IProduct } from './productModel';
import { ICart } from './cartModel';
import { IUser } from './userModel';

export type OrderItemType = {
  product: IProduct;
  quantity: number;
  price: number;
};

export interface IOrder extends Document {
  id: Types.ObjectId;
  user: Types.ObjectId | IUser;
  cart: ICart;
  items: OrderItemType[];
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

const orderItemSchema = new Schema<OrderItemType>({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const orderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    cart: { type: Schema.Types.ObjectId, ref: 'Cart', required: true },
    items: [orderItemSchema],
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const OrderModel: Model<IOrder> = model('Order', orderSchema);
