export interface IProduct {
    name: string;
    description: string;
    price: number;
    sku: number;
    product_image: string[];
    category: string;
    uploaded_by: object;
}

export interface IProductDocument extends IProduct, Document {
    // Add methods here (later later)
}
