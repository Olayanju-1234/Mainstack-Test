import { IProduct } from '@interfaces/product';
import { ProductModel } from "@models/product"

export const UpdateProduct = async (id: string, data: IProduct) => {
    const product = await ProductModel.findById(id);

    if (!product) {
        throw new Error('Product not found');
    }

    // Preserve existing images if no new images are provided
    if (!data.product_image || data.product_image.length === 0) {
        data.product_image = product.product_image;
    }

    Object.assign(product, data);

    await product.save();

    return product;
}
