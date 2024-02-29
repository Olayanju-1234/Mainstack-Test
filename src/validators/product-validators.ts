import Joi from 'joi';

export const ValidateProductData = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    sku: Joi.number().required(),
    product_image: Joi.array().items(Joi.string()),
    category: Joi.string().required(),
    uploaded_by: Joi.object().required(),
});
