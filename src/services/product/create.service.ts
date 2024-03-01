import { ICloudinaryFolder } from '@interfaces/cloudinary';
import { IProduct, IProductDocument } from '@interfaces/product';
import { ProductModel } from '@models/product';
import { uploadToCloudinary } from '@services/upload/image_upload.service';

const AddProductService = async (data: IProduct): Promise<IProductDocument> => {
    if (data.product_image && data.product_image.length > 0) {
        //upload all media to cloudinary
        const media = await Promise.all(
            data.product_image.map((file) =>
                uploadToCloudinary(file, { folder: ICloudinaryFolder.PRODUCTS })
            )
        );

        // map the media url to the product_image field
        data.product_image = media.map((file) => file.url);
    }

    // create product
    const product = await ProductModel.create(data);

    return product;
};

export default AddProductService;
