// Validator for the environment variables
import Joi from 'joi';

const Validator = (schema: any) =>
    Joi.object().keys(schema).unknown().required();

export default Validator;
