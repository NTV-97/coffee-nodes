import mongoose, { Document, Model } from 'mongoose';
const Schema = mongoose.Schema;

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface IUser extends Document {
  id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  phoneNumber: string;
  name?: string;
  address?: string;
  role: UserRoleEnum;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: { type: String },
    name: { type: String },
    role: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);
export const UserModel: Model<IUser> = mongoose.model('User', userSchema);
