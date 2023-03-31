import { Model, Document, Types, Schema, model } from 'mongoose';

export interface ICategory extends Document {
  id: Types.ObjectId;
  name: string;
  image: string;
  description?: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const CategoryModel: Model<ICategory> = model('Category', categorySchema);
