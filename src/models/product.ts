import { IProduct, IProductDocument } from '@interfaces/product';
import { model, Schema } from 'mongoose';

const ProductSchemaFields: Record<keyof IProduct, any> = {
    name: {
        type: String,
        required: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sku: {
        type: Number,
        required: true,
    },
    product_image: [
        {
            type: String,
        },
    ],
    category: {
        type: String,
        required: true,
    },
    uploaded_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
};

const ProductSchema = new Schema<IProductDocument>(ProductSchemaFields, {
    timestamps: true,
});

export const ProductModel = model<IProductDocument>('Product', ProductSchema);
