import { Request, Response } from 'express';
import { SignUp } from '@controllers/auth';
import { AuthSignUp } from '@services/auth/signup.service';

// Mock AuthSignUp service
jest.mock('@services/auth/signup.service');

describe('SignUp Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {
      body: {
        email: 'test@example.com',
        password: 'password123',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('should sign up a user successfully', async () => {
    // Mock AuthSignUp to return a new user
    const newUser = { _id: '65e18f4295f2632873fbfc8d', email: 'test@example.com' };
    (AuthSignUp as jest.Mock).mockResolvedValueOnce(newUser);

    await SignUp(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'User created successfully',
      data: newUser,
    });
  });

  it('should handle signup when user already exists', async () => {
    // Mock AuthSignUp to throw an error indicating user already exists
    (AuthSignUp as jest.Mock).mockRejectedValueOnce(new Error('User already exists'));

    await SignUp(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400); // Adjusted to match the expected status code
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'User already exists',
      error: 'User already exists', // Adjusted to match the error response structure
    });
  });
});
