import { createProduct } from './createProduct';
import { updateProduct } from './updateProduct';
import { deleteProduct } from './deleteProduct';
import { getProduct } from './getProduct';
import { getProducts } from './getProducts';

export const productResolvers = {
  Query: {
    getProduct,
    getProducts,
  },

  Mutation: {
    createProduct,
    updateProduct,
    deleteProduct,
  },
};
