import { IProduct, IProductDocument } from "@interfaces/product";
import { model, Schema } from "mongoose";

const ProductSchemaFields: Record<keyof IProduct, any> = {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
};

const ProductSchema = new Schema<IProductDocument>(ProductSchemaFields);

export const ProductModel = model<IProductDocument>("Product", ProductSchema);
