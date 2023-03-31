import { ProductModel, IProduct } from '@models';
import { Error } from '@config';
import { Context } from '@types';

export const deleteProduct = async (_: any, { id }: IProduct, context: Context) => {
  if (!context.userId) throw new Error('unauthorized', '401');
  const res = await ProductModel.findByIdAndDelete(id);
  if (res) {
    return {
      message: `Delete successfully`,
      success: true,
    };
  }
};
