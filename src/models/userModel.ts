import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { SchemaTypes } from '@const';

export interface IUser {
  id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  phoneNumber: string;
  type: 'admin' | 'staff' | 'manage';
  adminId?: mongoose.Types.ObjectId;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    password: {
      type: SchemaTypes.String,
      required: true,
    },
    type: {
      type: SchemaTypes.String,
      required: true,
    },
    adminId: {
      type: SchemaTypes.ObjectId,
    },
  },
  { timestamps: true },
);

export const UserModel = mongoose.model('User', userSchema);
