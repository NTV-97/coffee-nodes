import { CategoryModel, ICategory } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const deleteCategory = async (_: any, { id }: ICategory, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const res = await CategoryModel.findByIdAndDelete(id);
  if (res) {
    return {
      message: `Delete successfully`,
      success: true,
    };
  }
};
