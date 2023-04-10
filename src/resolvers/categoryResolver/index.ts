import { createCategory } from './createCategory';
import { updateCategory } from './updateCategory';
import { deleteCategory } from './deleteCategory';
import { getCategory } from './getCategory';
import { getCategories } from './getCategories';

export const categoryResolvers = {
  Query: {
    getCategory,
    getCategories,
  },

  Mutation: {
    createCategory,
    updateCategory,
    deleteCategory,
  },
};
