import mongoose, { Document, Model } from 'mongoose';
const Schema = mongoose.Schema;

export interface IUser extends Document {
  id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  phoneNumber: string;
  name?: string;
  address?: string;
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
  },
  { timestamps: true },
);
export const UserModel: Model<IUser> = mongoose.model('User', userSchema);
