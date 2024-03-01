import Joi from 'joi';

const schema = {
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test')
        .default('development'),
    PORT: Joi.number().default(3000),
    MONGODB_URI: Joi.string().required(),
    MONGODB_DEVELOPMENT_NAME: Joi.string().required(),
    MONGODB_PRODUCTION_NAME: Joi.string().required(),
    MONGODB_TEST_NAME: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    HASH_SECRET: Joi.string().required(),
    CLOUDINARY_CLOUD_NAME: Joi.string().required(),
    CLOUDINARY_API_KEY: Joi.string().required(),
    CLOUDINARY_SECRET_KEY: Joi.string().required(),
    DATABASE_USERNAME: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
};

export default schema;
