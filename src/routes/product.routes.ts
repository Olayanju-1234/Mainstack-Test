import { Router } from 'express';
import {
    createProduct,
    getProductById,
    listAllProducts,
} from '@controllers/product';
import auth from '@middlewares/auth';

const router = Router();

router.post('/', auth, createProduct);
router.get('/:id', auth, getProductById);
router.get('/', auth, listAllProducts);

export default router;
