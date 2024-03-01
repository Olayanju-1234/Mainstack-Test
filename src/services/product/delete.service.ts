import { ProductModel } from '@models/product';

export const DeleteProduct = async (id: string) => {
    const product = await ProductModel.findById(id);

    if (!product) {
        throw new Error('Product not found');
    }

    // delete product
    await product.deleteOne();

    return product;
};
