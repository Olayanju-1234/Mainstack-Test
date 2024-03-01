// index.ts
import dotenv from 'dotenv';
import Validator from './validate';
import schema from './schema'; // Assuming this is where your schema object is defined
import { types } from './types';

// dotenv
dotenv.config();

// Environment variables
const envVars = Validator(schema);

// Validate process.env using the validator
const { error, value: env } = envVars.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

// Construct config object
const config: types = {
    NODE_ENV: env.NODE_ENV,
    PORT: env.PORT,
    MONGO_URI: env.MONGO_URI,
    MONGODB_DEVELOPMENT_NAME: env.MONGODB_DEVELOPMENT_NAME,
    MONGODB_TEST_NAME: env.MONGODB_TEST_NAME,
    MONGODB_PRODUCTION_NAME: env.MONGODB_PRODUCTION_NAME,
    JWT_SECRET: env.JWT_SECRET,
    HASH_SECRET: env.HASH_SECRET,
    CLOUDINARY_CLOUD_NAME: env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: env.CLOUDINARY_API_KEY,
    CLOUDINARY_SECRET_KEY: env.CLOUDINARY_SECRET_KEY,
    DATABASE_USERNAME: env.DATABASE_USERNAME,
    DATABASE_PASSWORD: env.DATABASE_PASSWORD,
};

export default config;
