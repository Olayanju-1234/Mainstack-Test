import { Router } from 'express';
import {
    createProduct,
    getProductById,
    listAllProducts,
    updateProduct,
    deleteProduct,
} from '@controllers/product';
import auth from '@middlewares/auth';

const router = Router();

router.post('/', auth, createProduct);
router.get('/:id', getProductById);
router.get('/', listAllProducts);
router.patch('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);

export default router;
