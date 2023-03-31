import { Model, Document, Types, Schema, model } from 'mongoose';
import { IProduct } from './productModel';
import { IUser } from './userModel';

export type CartItemType = {
  product: IProduct | Types.ObjectId;
  quantity: number;
  size: string;
  toppings: [string];
  price: number;
};

export interface ICart extends Document {
  id: Types.ObjectId;
  user: Types.ObjectId | IUser;
  items: CartItemType[];
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

const cartItemSchema = new Schema<CartItemType>(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
    toppings: [{ type: String }],
    price: { type: Number, required: true },
  },
  { _id: false },
);

const cartSchema = new Schema<ICart>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [cartItemSchema],
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const CartModel: Model<ICart> = model('Cart', cartSchema);
