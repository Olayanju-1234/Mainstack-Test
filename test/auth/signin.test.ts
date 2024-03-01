import { Request, Response } from 'express';
import { SignIn } from '@controllers/auth';

// Mock UserModel
jest.mock('@models/user', () => ({
  UserModel: {
    findOne: jest.fn(),
  },
}));

// Mock AuthSignIn service
jest.mock('@services/auth/signin.service', () => ({
  AuthSignIn: jest.fn(),
}));

describe('SignIn Controller', () => {
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

  it('should sign in a user successfully', async () => {
    const mockUser = { _id: '65e18f4295f2632873fbfc8d', email: 'test@example.com' };

    // Mock UserModel.findOne to return the user
    (require('@models/user').UserModel.findOne as jest.Mock).mockResolvedValueOnce(mockUser);

    // Mock AuthSignIn service to return the user and token
    (require('@services/auth/signin.service').AuthSignIn as jest.Mock).mockResolvedValueOnce({
      user: mockUser,
      token: 'jwtToken',
    });

    await SignIn(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'User signed in successfully',
      data: {
        user: mockUser,
        token: 'jwtToken',
      },
    });
  });

//   it('should handle sign in when user not found', async () => {
//     // Mock UserModel.findOne to return null (user not found)
//     (require('@models/user').UserModel.findOne as jest.Mock).mockResolvedValueOnce(null);

//     await SignIn(req as Request, res as Response);

//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.json).toHaveBeenCalledWith({
//       success: false,
//       message: 'User not found',
//       error: {}, // Adjusted to match the error response structure
//     });
//   });
});
