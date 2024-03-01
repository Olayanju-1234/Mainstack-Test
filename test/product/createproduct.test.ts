import { Request, Response } from 'express';
import { createProduct } from '@controllers/product';
import AddProductService from '@services/product/create.service';
import { parseForm } from '@utils/formidable'; // Importing parseForm function

// Mocking the formidable module
jest.mock('formidable', () => ({
  __esModule: true,
  default: () => ({
    parse: jest.fn((req, callback) => {
      // Simulate form parsing
      const fields = {
        name: 'Test Product',
        description: 'This is a test product',
        price: 100,
        sku: '12345',
        category: 'Electronics',
      };
      const files = {
        media: [{ filepath: 'test_file_path.jpg' }],
      };
      callback(null, fields, files);
    }),
  }),
}));

// Mocking the parseForm function
jest.mock('@utils/formidable', () => ({
  __esModule: true,
  parseForm: jest.fn((fields) => fields), // Mocking parseForm to return the fields directly
}));

// Mocking the AddProductService
jest.mock('@services/product/create.service', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('createProduct', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = { user: { _id: 'user_id' } } as Partial<Request>;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Partial<Response>;
  });

  it('should create a product successfully', async () => {
    const mockProduct = { _id: '12345', product_image: ['test_file_path.jpg'] };
    (AddProductService as jest.Mock).mockResolvedValueOnce(mockProduct);

    await createProduct(req as Request, res as Response);

    expect(parseForm).toHaveBeenCalledWith({
      name: 'Test Product',
      description: 'This is a test product',
      price: 100,
      sku: '12345',
      category: 'Electronics',
    });
    expect(AddProductService).toHaveBeenCalledWith({
      name: 'Test Product',
      description: 'This is a test product',
      price: 100,
      sku: '12345',
      category: 'Electronics',
      product_image: ['test_file_path.jpg'],
      uploaded_by: 'user_id',
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Product created successfully',
      data: mockProduct,
    });
  });

  // Add more test cases to cover error scenarios
});
