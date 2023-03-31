import { ProductModel, IProduct } from '@models';
import { Context } from '@types';
import { Error } from '@config';

export const createProduct = async (
  _: any,
  { product }: { product: IProduct },
  context: Context,
) => {
  try {
    if (!context.userId) throw new Error('unauthorized', '401');
    const newProduct = new ProductModel(product);
    await newProduct.save();
    const _product: IProduct | null = await ProductModel.findById(newProduct.id).populate(
      'category',
    );
    return _product;
  } catch (error) {
    return error;
  }
};
