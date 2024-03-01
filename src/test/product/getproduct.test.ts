import { Request, Response } from 'express';
import { getProductById } from '@controllers/product';
import { GetProductById } from '@services/product/get.service';

jest.mock('@services/product/get.service');

describe('getProductById Controller', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        req = {
            params: { id: 'product_id' },
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it('should get a product by id successfully', async () => {
        // Mock the return value of GetProductById
        const productMock = {
            _id: 'product_id',
            name: 'Test Product',
            description: 'This is a test product',
            product_image: ['image1.jpg', 'image2.jpg'],
            price: 99.99,
            category: 'Test Category',
            uploaded_by: 'uploaded_user_id',
        };
        (GetProductById as jest.Mock).mockResolvedValueOnce(productMock);

        await getProductById(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: 'Product fetched successfully',
            data: productMock,
        });
    });

    it('should handle product not found error', async () => {
        // Mock the function to throw a NotFoundError
        (GetProductById as jest.Mock).mockRejectedValueOnce(
            new Error('Product not found')
        );

        await getProductById(req as Request, res as Response);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: 'Product not found',
            error: 'Not Found Error',
        });
    });
});
