import { Request, Response } from 'express';
import { listAllProducts } from '@controllers/product';
import { ListAllProducts } from '@services/product/get.service';

jest.mock('@services/product/get.service');

describe('listAllProducts', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        req = { query: {} } as Partial<Request>;
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as Partial<Response>;
    });

    it('should list all products successfully', async () => {
        const products = [{ _id: 'product_id', name: 'Test Product' }];
        (ListAllProducts as jest.Mock).mockResolvedValue(products);

        await listAllProducts(req as Request, res as Response);

        expect(ListAllProducts).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: 'Products fetched successfully',
            data: products,
        });
    });
});
