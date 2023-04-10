import { Document, model, Model, Schema, Types } from 'mongoose';
import { ICategory } from './categoryModel';

export interface IProduct extends Document {
  id: Types.ObjectId;
  name: string;
  price: number;
  category: Types.ObjectId | ICategory;
  image: string;
  details: {
    size: Array<{
      name: string;
      price: number;
    }>;
    topping: Array<{
      name: string;
      price: number;
    }>;
  };
  description?: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: {
      type: Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    details: {
      size: {
        type: [
          {
            name: String,
            price: Number,
          },
        ],
        required: true,
      },
      topping: {
        type: [
          {
            name: String,
            price: Number,
          },
        ],
        required: true,
      },
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const ProductModel: Model<IProduct> = model('Product', productSchema);
