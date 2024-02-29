import { SignUp, SignIn } from '@controllers/auth';
import { Router } from 'express';
import { validateBody } from '@middlewares/validate';
import {
    ValidateRegData,
    ValidateLoginData,
} from '@validators/auth-validators';

const router = Router();

router.post('/signup', validateBody(ValidateRegData), SignUp);
router.post('/signin', validateBody(ValidateLoginData), SignIn);

export default router;
