import { Model, Document, Types, Schema, model } from 'mongoose';
import { IProduct } from './productModel';
import { IUser } from './userModel';

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}
export type OrderItemType = {
  product: IProduct | Types.ObjectId;
  quantity: number;
  size: string;
  toppings: [string];
  price: number;
};

export interface IOrder extends Document {
  id: Types.ObjectId;
  user: Types.ObjectId | IUser;
  items: OrderItemType[];
  totalPrice: number;
  status: OrderStatus;
  note: string;
  createdAt: Date;
  updatedAt: Date;
}

const orderItemSchema = new Schema<OrderItemType>(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
    toppings: [{ type: String }],
    price: { type: Number, required: true },
  },
  { _id: false },
);

const orderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    totalPrice: { type: Number, required: true },
    status: { type: String },
    note: { type: String },
  },
  { timestamps: true },
);

export const OrderModel: Model<IOrder> = model('Order', orderSchema);
