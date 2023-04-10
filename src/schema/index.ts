import { gql } from 'apollo-server-express';
import { userSchema } from './userSchema';
import { authSchema } from './authSchema';
import { categorySchema } from './categorySchema';
import { productSchema } from './productSchema';
import { cartSchema } from './cartSchema';
import { orderSchema } from './orderSchema';

const baseSchema = gql`
  type Query
  type Mutation
`;

export const typeDefs = [
  baseSchema,
  userSchema,
  authSchema,
  categorySchema,
  productSchema,
  cartSchema,
  orderSchema,
];
