import AddProductService from '@services/product/create.service';
import { GetProductById, ListAllProducts } from '@services/product/get.service';
import { UpdateProduct } from '@services/product/update.service';
import { DeleteProduct } from '@services/product/delete.service';
import { Request, Response } from 'express';
import { IProduct, IProductDocument } from '@interfaces/product';
import { SuccessResponse, ErrorResponse } from '@utils/responseHandler';
import formidable from 'formidable';
import { parseForm } from '@utils/formidable';

export const createProduct = async (req: Request, res: Response) => {
    const form = formidable({});
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return ErrorResponse(res, err, 500);
        }

        const { name, description, price, sku, category } = fields;

        if (!name || !description || !price || !sku || !category) {
            return ErrorResponse(
                res,
                'name, description, price, sku, category are required',
                400
            );
        }

        try {
            const { media } = files;
            const newFields = parseForm(fields);
            let newMedia: string[] = [];
            if (media) {
                newMedia = media.map((file: any) => file.filepath);
            }

            const product = await AddProductService({
                ...newFields,
                product_image: newMedia,
                uploaded_by: req.user._id,
            });
            return SuccessResponse(
                res,
                product,
                'Product created successfully',
                201
            );
        } catch (error: any) {
            return ErrorResponse(res, error.message, 500);
        }
    });
};

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await GetProductById(id);
        return SuccessResponse(
            res,
            product as IProductDocument,
            'Product fetched successfully'
        );
    } catch (error: any) {
        return ErrorResponse(res, error.message, 500);
    }
};

export const listAllProducts = async (req: Request, res: Response) => {
    try {
        let {
            page = 1,
            limit = 10,
            query = '',
            order_by = 'desc',
            sort_by = 'createdAt',
            filter = '{}',
        } = req.query;

        limit = parseInt(limit as string);
        page = parseInt(page as string);

        filter = JSON.parse(filter as string);

        const filteredObject = {
            ...(filter as object),
        };

        const products = await ListAllProducts(
            page - 1,
            limit,
            query as string,
            order_by as string,
            sort_by as string,
            filteredObject
        );
        return SuccessResponse(res, products, 'Products fetched successfully');
    } catch (error: any) {
        return ErrorResponse(res, error.message, 500);
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const form = formidable({});
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return ErrorResponse(res, err, 500);
        }

        try {
            const { media } = files;
            const newFields = parseForm(fields);
            let newMedia: string[] = [];
            if (media) {
                newMedia = media.map((file: any) => file.filepath);
            }

            const product = await UpdateProduct(id, newFields as IProduct);
            return SuccessResponse(
                res,
                product,
                'Product updated successfully',
                200
            );
        } catch (error: any) {
            return ErrorResponse(res, error.message, 500);
        }
    });
};

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await DeleteProduct(id);
        return SuccessResponse(
            res,
            product,
            'Product deleted successfully',
            200
        );
    } catch (error: any) {
        return ErrorResponse(res, error.message, 500);
    }
};

