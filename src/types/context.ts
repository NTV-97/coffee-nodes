import { UserRoleEnum } from '@models';
import { Types } from 'mongoose';
export type Context = {
  userId: Types.ObjectId;
  role: UserRoleEnum;
};
