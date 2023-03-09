import mongoose, { Types } from 'mongoose';
const Schema = mongoose.Schema;
import { SchemaTypes } from '@const';

export interface IMerchandiseGroup {
  _id: Types.ObjectId;
  merchandiseGroupCode: string;
  merchandiseGroupName: string;
  description?: string;
}

const merchandiseGroupSchema = new Schema<IMerchandiseGroup>(
  {
    merchandiseGroupCode: {
      type: SchemaTypes.String,
      required: true,
      unique: true,
    },
    merchandiseGroupName: {
      type: SchemaTypes.String,
      required: true,
    },
    description: {
      type: SchemaTypes.String,
    },
  },
  { timestamps: true },
);

export const MerchandiseGroupModel = mongoose.model('MerchandiseGroup', merchandiseGroupSchema);
