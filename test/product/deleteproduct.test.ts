import { Request, Response } from 'express';
import { deleteProduct } from '@controllers/product';
import { DeleteProduct } from '@services/product/delete.service';

jest.mock('@services/product/delete.service');

describe('deleteProduct', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = { params: { id: 'product_id' } } as Partial<Request>;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Partial<Response>;
  });

  it('should delete product successfully', async () => {
    (DeleteProduct as jest.Mock).mockResolvedValue('product_id');

    await deleteProduct(req as Request, res as Response);

    expect(DeleteProduct).toHaveBeenCalledWith('product_id');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Product deleted successfully',
      data: 'product_id',
    });
  });

  it('should handle product not found error', async () => {
    (DeleteProduct as jest.Mock).mockRejectedValue(new Error('Product not found'));

    await deleteProduct(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Product not found',
      error: 'Internal Server Error',
    });
  });
});