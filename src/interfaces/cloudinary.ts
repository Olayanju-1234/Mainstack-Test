interface ICloudinary {
    folder?: string;
    public_id?: string;
}

export enum ICloudinaryFolder {
    PRODUCTS = 'products',
    // USERS = 'users', might add profile pictures in the future
}

export default ICloudinary;
