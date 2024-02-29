import Joi from 'joi';

export const ValidateRegData = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

export const ValidateLoginData = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});
